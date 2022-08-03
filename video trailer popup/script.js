const btn=document.querySelector(".btn");
const video=document.querySelector(".vid-div");
const close=document.querySelector(".close");
const vid=document.querySelector(".video")

btn.addEventListener("click",()=>{
    video.classList.remove("active");
    vid.play();
    
});

close.addEventListener("click",()=>
{
    video.classList.add("active");
    vid.pause();
    vid.currentTime=0;
});
