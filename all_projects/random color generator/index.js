const containerel=document.querySelector(".container");

for(index=0; index<30; index++)
{
    const colorEl=document.createElement("div");
    colorEl.classList.add("color");
    containerel.appendChild(colorEl);
}//after this i can delete all div color boxes in html

const colorEls=document.querySelectorAll(".color");
console.log(colorEls);


genrerateColor()
function genrerateColor(){
    colorEls.forEach((colorEl)=>{
        const newcolorcode = randomColor();
        colorEl.style.backgroundColor = "#" + newcolorcode
        colorEl.innerText="#"+ newcolorcode
    })

}

function randomColor(){
    const chars="0123456789abcdef"
    const colorCodeLength=6;
    let colorCode= "";
    for(let index = 0; index<colorCodeLength; index++)
    {
        const randomNum= Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum,randomNum +1)
        
    } return colorCode
}