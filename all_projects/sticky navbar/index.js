const navel= document.querySelector(".nav")
const parael= document.querySelector(".para")

// console.log(navel.offsetHeight)
// console.log(parael.offsetTop)
// console.log(window.scrollY)


window.addEventListener("scroll", ()=>{
    if(window.scrollY> parael.offsetTop- navel.offsetHeight){
       navel.classList.add("active")
    }
    else{
        navel.classList.remove("active")
    }
})
