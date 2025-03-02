function addMissionListeners(){
    document.getElementById("plant").addEventListener("click", ()=>{
        changeScore(5);
    })
    document.getElementById("bike").addEventListener("click", ()=>{
        changeScore(30);
    })
    document.getElementById("bottle").addEventListener("click", ()=>{
        document.getElementById("plant-bar").value += 1;
        changeScore(20);
    })
}
