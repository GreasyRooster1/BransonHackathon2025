function setupSummaryEvents(){
    document.querySelector(".submit-button").addEventListener("click",()=>{
        document.querySelector(".submit-button").classList.remove("active");
        document.querySelector(".summary").classList.add("active");
        let emmissions_total = calculateTotalEmmissions();
        let emmissions = emmissions_total.toFixed(2);
        let multiplier = 5;
        let score = (120 - emmissions_total*multiplier).toFixed(0);
        if (score<0){
            score = 0;
        }
        if (score>100){
            score = 100;
        }
        changeScore(score/5)
        document.querySelector(".data").innerHTML = score
        document.getElementById("emmissions-data").innerHTML = emmissions
    });
}

function calculateTotalEmmissions(){
    let total = 0;
    for(let impact of impacts){
        console.log(impact,impact.calculateEmmissions())
        total+=impact.calculateEmmissions();
    }
    return total;
}