let questions = ["Do you use an EV?","Do you carpool regularly?","Do you have LED bulbs","Are you willing to imporove?"]
let currentQuestion =0;
function init(){
    createBlurs();
    initEvents();
}

function initEvents(){
    document.querySelector(".yes").addEventListener("click",()=>{
        changeScore(20)
        nextQuestion()
    })
    document.querySelector(".no").addEventListener("click",()=>{
        nextQuestion()
    })
}

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion==questions.length){
        window.location.href = "./index.html";
        return;
    }
}

window.onload = init;