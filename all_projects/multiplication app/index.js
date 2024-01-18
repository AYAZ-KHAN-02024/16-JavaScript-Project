const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);


const questionel= document.getElementById("question");
const inputel= document.getElementById("input");
const formel = document.getElementById("form");

const scoreel= document.getElementById("score")

let score=JSON.parse(localStorage.getItem("score"));

if (!score){
    score=0;
}
scoreel.innerText=`score:${score}`

questionel.innerText=`what is ${num1} multiply ${num2} ?`;

const correctans= num1*num2;

formel.addEventListener("submit", ()=>{
    const userans= +inputel.value//+ for change string to number
    if(userans===correctans){
        score++;
        updatelocalstroge()
    }
    else{
        score--;
        updatelocalstroge()
    }
});

function updatelocalstroge(){
    localStorage.setItem("score", JSON.stringify(score))//this is for change number to string in local stroge 
}
