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




// calculate upon button press

document.onclick= function(event) {
    if(event.target.classList.contains("calculate-button")){
        calculateRouteStats()
    }
}
    
async function calculateRouteStats(){
    let wp1 = await addressToCoordinates(document.getElementById("wp1").value)
    let wp2 = await addressToCoordinates(document.getElementById("wp2").value)
    let locations = [wp1,wp2]
    displayMap(locations)
    let data = await getRouteData(locations)
    console.log(data)
    console.log(locations)
}

function displayMap(locations){
    const map = L.map('map').setView([37.7749, -122.4194], 12); // Set to San Francisco

    // Add Geoapify tile layer (replace with your API key)
    L.tileLayer(`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${apikey}`, {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Custom marker icon
    const customIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Example icon URL
        iconSize: [30, 30], // Size of the icon
        iconAnchor: [15, 30], // Anchor point (center-bottom)
        popupAnchor: [0, -30] // Popup position
    });

    // Add marker with icon
    locations.forEach(location => {
    L.marker(location.split(","), { icon: customIcon })
        .addTo(map)
        .bindPopup('Custom Icon Marker');})
}