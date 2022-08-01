let rem=document.getElementById("remaining");
let counter=document.getElementById("counter");
let textarea=document.getElementById("textarea");
rem.innerText=textarea.getAttribute("maxlength");
let count=0;
counter.innerText=count;

textarea.addEventListener("keyup",()=>{
    update();
})

function update()
{
    var s=textarea.value;
    count=s.length;
    counter.innerText=count;
    rem.innerText=textarea.getAttribute("maxlength")-count;
}

update();
