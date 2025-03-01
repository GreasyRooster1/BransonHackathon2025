let impacts = []

class Impact{

    constructor(){
        this.elememnt = document.createElement("div")
        this.elememnt.classList.add("impact");
        this.elememnt.classList.add("glass");
        document.querySelector(".impacts-container").appendChild(this.elememnt)
        this.createContent()
    }
    createContent(){

    }
    calculateEmmissions(){

    }
}

class LightsImpact extends Impact{
    constructor(){
        super();
    }
    createContent(){
        this.elememnt.innerHTML = `
            <div class="power-impact-text">Enter the amount of time you had your lights on today</div>
            <input class="glass text-input time" placeholder = "Time in hours"></input>
        `
    }
    calculateEmmissions(){
        let time = parseFloat(this.elememnt.querySelector(".time").value);
        let kwhOfAllPerYear = (time*60.0)*67.0
        let kwhPerHour = kwhOfAllPerYear/8760.0;
        return kwhPerHour*0.85;
    }
}

class DriveImpact extends Impact{
    constructor(){
        super();
        
    }
    createContent(){
        this.id = Math.floor(Math.random()*1000000)
        this.elememnt.innerHTML = `
            <div class="power-impact-text">Enter the begin and end desitnation</div>
            <input id="wp1" class="glass text-input dest1" placeholder = "Destination 1"></input>
            <input id="wp2" class="glass text-input dest2" placeholder = "Destination 2"></input>
            <button class="glass calculate-button" id="calculate-button">Calculate</button>
            <div id=`+this.id+` style="height: 300px; width: 300px;"></div>
        `
        this.elememnt.querySelector(".calculate-button").addEventListener("click",()=>{
            calculateRouteStats().then((stats)=>{
                console.log(stats)
                this.displayMap(stats.locations)
            })
        })
    }
    displayMap(locations){
        const map = L.map(this.id+"").setView([37.7749, -122.4194], 12); // Set to San Francisco
    
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
    
        console.log(locations)
        // Add marker with icon
        locations.forEach(location => {
            console.log(location)
        L.marker(location.split(","), { icon: customIcon })
            .addTo(map)
            .bindPopup('Custom Icon Marker');})
    }
    calculateEmmissions(){
        let distanceMiles = calculateRouteStats.data/1609.34;
        return distanceMiles*0.4;
    }
}

class PowerImpact extends Impact{
    constructor(){
        super();
    }
    createContent(){
        this.elememnt.innerHTML = `
            <div class="power-impact-text">Enter the wattage amount and time</div>
            <input class="glass text-input time" placeholder = "Time in hours"></input>
            <input class="glass text-input usage" placeholder = "Usage (Watts)"></input>
        `
    }
    calculateEmmissions(){
        let time = parseFloat(this.elememnt.querySelector(".time").value);
        let usage = parseFloat(this.elememnt.querySelector(".usage").value);
        let kwhOfAllPerYear = (time*usage);
        let kwhPerHour = kwhOfAllPerYear/8760.0;
        return kwhPerHour*0.85;
    }
}

function setupEvents(){
    document.querySelector(".new-button").addEventListener("click",()=>{
        let type = document.querySelector(".type-dropdown").value
        createImpact(type)
    })
}

function createImpact(type){
    if(type=="lights"){
        impacts.push(new LightsImpact());
    }
    if(type=="power"){
        impacts.push(new PowerImpact());
    }
    if(type=="drive"){
        impacts.push(new DriveImpact());
    }
}