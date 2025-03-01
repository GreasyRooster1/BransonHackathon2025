var apikey = "d3f0498fac234f7891405d986e872c52"

async function get(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getRouteData(locations){
    var location_list = ""
    locations.forEach(location => {
        location_list += location + "|"
    });
    var data = await get(`ttps://api.geoapify.com/v1/routing?waypoints=${location_list}&mode=${transportation_mode}&apiKey=${apikey}`)
    return data
}


var locations = ["37.970187520374125,-122.52218960842936","37.95609038562469,-122.50912077728964"]

var data = await getRouteData(locations)
console.log(data)