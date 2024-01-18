const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
inputEl.checked =JSON.parse(localStorage.getItem("current mode"));
function update(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor= "black";
    }
    else{
        bodyEl.style.backgroundColor = 'aliceblue';
    }
}
update();
inputEl.addEventListener("input", ()=>
{
    update();
    mode()
})

function mode(){
    localStorage.setItem("current mode" , 
    JSON.stringify(inputEl.checked));
}