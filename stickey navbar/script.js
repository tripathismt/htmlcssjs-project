const nav=document.querySelector(".container-nav");
const bottom = document.querySelector(".content-div");



 window.addEventListener("scroll",()=>{

    console.log(bottom.offsetTop - nav.offsetHeight - (2*12) );
    console.log(window.scrollY);

    if(window.scrollY > (bottom.offsetTop - nav.offsetHeight - (2*12)))
    {
        nav.classList.add("active");
        

    }
    else
    nav.classList.remove("active");
     
 })