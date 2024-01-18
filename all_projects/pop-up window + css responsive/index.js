const btnEl = document.querySelector(".btn");
const iconEl = document.querySelector(".icon");
const boxaEl = document.querySelector(".boxa");
const boxEl = document.querySelector(".box");

btnEl.addEventListener("click", ()=>{
    boxaEl.classList.toggle("active")
    boxEl.classList.toggle("active")

});

iconEl.addEventListener("click", ()=>{
    boxaEl.classList.toggle("active")
    boxEl.classList.toggle("active")
});