function addListeners(){
    document.getElementById("plant").addEventListener("click", function(){
        document.getElementById("plant-bar").value += 1;
    })
}

addListeners();