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
    console.log(data)
}

test()