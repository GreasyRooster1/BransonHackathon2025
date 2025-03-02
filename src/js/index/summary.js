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
        changeScore(score/3)
        let response
        if(score<30){
            response = "Looks like a lot for one day. I believe you can crush it tomorrow."
        }else if(score<80){
            response = "Nice! Keep it up, planet saver."
        }else if(score<95){
        response = "You totally crushed it today!"
        }else{
            response = "Perfect! Give yourself a pat on the back."
        }
        document.querySelector(".data").innerHTML = score
        document.getElementById("emmissions-data").innerHTML = emmissions
        document.getElementsByClassName("response").innerHTML = response
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