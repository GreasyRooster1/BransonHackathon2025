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

class PowerImpact extends Impact{
    constructor(){
        super();
    }
    createContent(){
        this.elememnt.innerHTML = `
            <div class="power-impact-text">Enter the amount of time you had your lights on today</div>
            <input class="glass text-input" placeholder = "Time in hours"></input>
        `
    }
}

function setupEvents(){
    document.querySelector(".new-button").addEventListener("click",()=>{
        createImpact("power")
    })
}

function createImpact(type){
    if(type=="power"){
        impacts.push(new PowerImpact());
    }
}