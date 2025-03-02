function addMissionListeners(){
    document.getElementById("plant").addEventListener("click", ()=>{
        document.getElementById("plant-bar").value += 1;
        changeScore(5);
    })
    document.getElementById("bike").addEventListener("click", ()=>{
        document.getElementById("plant-bar").value += 1;
        changeScore(50);
    })
    document.getElementById("bottle").addEventListener("click", ()=>{
        document.getElementById("plant-bar").value += 1;
        changeScore(20);
    })
}
