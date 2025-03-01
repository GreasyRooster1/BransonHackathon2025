function createBlurs(){
    for(let i=0;i<10;i++){
        let el = createBlur();
        document.querySelector(".bg-blurs").appendChild(el);
    }
}
function createBlur(){
    let el = document.createElement("div");
    el.className = "blur"
    el.style.top = (Math.random()*100)+"vh";
    el.style.left = (Math.random()*100)+"vw";

    let size = 200+Math.random()*400;
    el.style.width = size+"px";
    el.style.height = size+"px";

    return el
}