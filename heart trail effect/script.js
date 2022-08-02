const body=document.querySelector("body");

body.addEventListener("mousemove",(event)=>{
    const spanel=document.createElement("span");
    body.appendChild(spanel);
    spanel.style.left=event.offsetX+"px";
    spanel.style.top=event.offsetY+"px";

    var size= Math.random()*100;
    spanel.style.width=size+"px";
    spanel.style.height=size+"px";


    setTimeout(() => {
        spanel.remove()
    }, 3000);
})