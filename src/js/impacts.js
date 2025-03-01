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
}

class DriveImpact extends Impact{
    constructor(){
        super();
    }
    createContent(){
        this.elememnt.innerHTML = `
            <div class="power-impact-text">Enter the begin and end desitnation</div>
            <input class="glass text-input dest1" placeholder = "Time in hours"></input>
            <input class="glass text-input dest2" placeholder = "Usage (KWh)"></input>
        `
    }
}

class PowerImpact extends Impact{
    constructor(){
        super();
    }
    createContent(){
        this.elememnt.innerHTML = `
            <div class="power-impact-text">Enter the usage amount and time</div>
            <input class="glass text-input time" placeholder = "Time in hours"></input>
            <input class="glass text-input usage" placeholder = "Usage (KWh)"></input>
        `
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
}