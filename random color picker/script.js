const container = document.querySelector(".container");

for (let index = 0; index < 32; index++) {
    const newbox=document.createElement("div");
    newbox.classList.add("div-box");
    container.appendChild(newbox); 
}


const allbox = document.querySelectorAll(".div-box");

function colorgen()
{
    allbox.forEach((newbox) => {
        let colorp=colorgenerator();
        console.log(colorp);
        newbox.style.backgroundColor=colorp;
        newbox.innerText=colorp;
        
    });
}
colorgen();

function colorgenerator(){
    var char="0123456789abcdef";
        let colorcode="#";

    for (let index = 0; index < 6; index++) {
        
        const val=Math.floor(Math.random() * char.length);

        colorcode=colorcode+char.substring(val,val+1);
       
    }
   return colorcode;
}
