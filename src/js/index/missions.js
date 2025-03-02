function addMissionListeners(){
    document.getElementById("plant").addEventListener("click", ()=>{
        document.getElementById("plant-bar").value += 1;
        changeScore(5);
    })
    document.getElementById("bike").addEventListener("click", ()=>{
        changeScore(30);
        document.getElementById("bike").innerHTML = "Completed!"
    })
    document.getElementById("bottle").addEventListener("click", ()=>{
        changeScore(20);
        document.getElementById("bottle").innerHTML = "Completed!"
    })
}
