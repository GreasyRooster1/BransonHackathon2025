var apikey = "d3f0498fac234f7891405d986e872c52"

async function get(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getRouteData(locations){
    let transportation_mode = "drive"
    let location_list = locations.join("|")
    var response = await get(`https://api.geoapify.com/v1/routing?waypoints=${location_list}&mode=${transportation_mode}&apiKey=${apikey}`)
    var info = response.features[0].properties
    let data = {
        distance: info.distance,
        time: info.time,
    }
    return data
}


var locations = ["37.970187520374125,-122.52218960842936","37.95609038562469,-122.50912077728964"]

async function test(){
    var data = await getRouteData(locations)
    var l = await addressToCoordinates("San Francisco")
    console.log(l)
    console.log(data)

}

async function addressToCoordinates(address){
    // unnecessarily long but ok
    let data = await get(`https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=${apikey}`)
    let lat = data.results[0].lat
    let lon = data.results[0].lon
    let coordinates_array = [lat,lon]
    let coordinates = coordinates_array.join(",")
    return coordinates
}
    
async function calculateRouteStats(){
    let wp1 = await addressToCoordinates(document.getElementById("wp1").value)
    let wp2 = await addressToCoordinates(document.getElementById("wp2").value)
    let locations = [wp1,wp2]
    let data = await getRouteData(locations)
    console.log(data)
    return {
        locations:locations,
        data:data.distance,
    }
}

function changeScore(val){
    let score = localStorage.getItem("score");
    if(score==null){
        localStorage.setItem("score",val);
    }else{
        localStorage.setItem("score",parseInt(localStorage.getItem("score"))+val);
    }
    if(!window.location.href.includes("landing")){
        updateRankVisual();
    }
}

function getScore(){
    return parseInt(localStorage.getItem("score"));
}
function resetScore(){
    localStorage.setItem("score",0);
}