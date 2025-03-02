const MAX_SCORE = 300;

let ranks = [
    ["bronze","Everybody starts somewhere, stay committed to improving the world!"],
    ["silver","Not everybody can make a commitment to staying green"],
    ["gold","Youre keep the earth green by staying gold!"],
    ["platinum","Reaching platinum is a huge achievement, keep climbing!"],
    ["diamond","You're a diamond in the ruff! Staying committed to keep the earth healthy!"],
    ["ruby","You're well on your way to being a true climate change warrior! Keep up the good work!"],
    ["champion","Champions are true climate change warriors! Helping everyday to change the world!"],
]

function updateRankVisual(){
    let visScore = (getScore()/300)
    let score = 1-visScore;
    document.querySelector(".rank-pointer").style.top = score*85+"%";
    for(let i=0;i<ranks.length;i++){
        let start = i/ranks.length;
        let end = (i+1)/ranks.length;
        if(visScore>=start&&visScore<end){
            document.querySelector(".rank-desc").innerHTML = ranks[i][1];
            document.querySelector(".display-rank-img").src = "./assets/ranks/"+ranks[i][0]+".png";
            document.querySelector(".rank-name").innerHTML = capitalizeFirstLetter(ranks[i][0]);
        }
    }
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}