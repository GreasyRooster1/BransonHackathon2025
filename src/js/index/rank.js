const MAX_SCORE = 300;

function updateRankVisual(){
    let score = 1-(getScore()/300);
    document.querySelector(".rank-pointer").style.top = score*85+"%";
}