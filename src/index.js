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

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: -24.345, lng: 134.46 }, // Australia.
    });
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      map,
      panel: document.getElementById("panel"),
    });
  
  
    directionsRenderer.addListener("directions_changed", () => {
      const directions = directionsRenderer.getDirections();
  
  
      if (directions) {
        computeTotalDistance(directions);
      }
    });
    displayRoute(
      "Perth, WA",
      "Sydney, NSW",
      directionsService,
      directionsRenderer,
    );
  }
  
  
  function displayRoute(origin, destination, service, display) {
    service
      .route({
        origin: origin,
        destination: destination,
        waypoints: [
          { location: "Adelaide, SA" },
          { location: "Broken Hill, NSW" },
        ],
        travelMode: google.maps.TravelMode.DRIVING,
        avoidTolls: true,
      })
      .then((result) => {
        display.setDirections(result);
      })
      .catch((e) => {
        alert("Could not display directions due to: " + e);
      });
  }
  
  
  function computeTotalDistance(result) {
    let total = 0;
    const myroute = result.routes[0];
  
  
    if (!myroute) {
      return;
    }
  
  
    for (let i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
  
  
    total = total / 1000;
    document.getElementById("total").innerHTML = total + " km";
  }
  
  