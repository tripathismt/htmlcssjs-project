let num1 = document.getElementById("first");
let num2 = document.getElementById("second");
let score = document.getElementById("score");
const form=document.getElementById("form");
const input=document.getElementById("answer")
const reset=document.getElementById("reset")
let point=JSON.parse(localStorage.getItem("point"));

if(!point)
{
   point=0;
}
score.innerText=point;
function working()
{
    // alert("Hello");
    let numone=Math.floor(Math.random() * 10);
    let numtwo=Math.floor(Math.random() * 10);
    
    num1.innerText = numone;
    num2.innerText = numtwo;

    let mult=numone*numtwo;

    reset.addEventListener("click",()=>{
          
      point=1;
      updatelocal();
    })
    

    form.addEventListener("submit",()=>{
         let useranswer=input.value;
          
    
    if(useranswer==mult)
     {
      point++;
      updatelocal();
     } 
    else
    {

       point--;
       updatelocal();
    }
       
       score.innerText=point;
   
    })

};
function updatelocal()
{
   localStorage.setItem("point",JSON.stringify(point));
}

working();