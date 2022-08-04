const inner=document.querySelector(".inner-container");
const popup=document.querySelector(".popup-container");
const btn=document.querySelector(".btn");
const close=document.querySelector(".close");

btn.addEventListener("click",()=>{
    popup.classList.remove("active");
    inner.classList.add("Active");
})
close.addEventListener("click",()=>{
    popup.classList.add("active");
    inner.classList.remove("Active");

})