const bgEl = document.getElementById("bg");

window.addEventListener("scroll", ()=>{
   
    updateBg()
}
)

function updateBg(){
    bgEl.style.opacity= 1 - window.pageYOffset /733;
    bgEl.style.backgroundSize = 50- window.pageYOffset /10+ "%" ;
}
console.log(pageYOffset)