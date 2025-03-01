function setupSummaryEvents(){
    document.querySelector(".submit-button").addEventListener("click",()=>{
        document.querySelector(".submit-button").classList.remove("active");
        document.querySelector(".summary").classList.add("active");
        calculateTotalEmmissions();
    });
}

function calculateTotalEmmissions(){
    let total = 0;
    for(let impact of impacts){
        console.log(impact,impact.calculateEmmissions())
        total+=impact.calculateEmmissions();
    }
    console.log(total)
}