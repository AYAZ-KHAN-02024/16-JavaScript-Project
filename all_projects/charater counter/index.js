const textel= document.getElementById("text");
const totalel = document.getElementById("total");
const reamanel = document.getElementById("reaman");

textel.addEventListener("keyup", ()=>{
    updatecounter()
})

function updatecounter(){
    totalel.innerText=`Total Charater: ${textel.value.length}`

    reamanel.innerText=`Reamaining : ${textel.getAttribute("maxlength")-textel.value.length }`
}

