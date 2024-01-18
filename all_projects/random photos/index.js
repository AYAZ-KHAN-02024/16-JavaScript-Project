const btnEl = document.querySelector(".btn");
const imgboxEl = document.querySelector(".imgbox");


btnEl.addEventListener("click", ()=>{
    for(let i=0;  i<4;  i++){
    const imgEl = document.createElement("img");
    const numEl = Math.ceil(Math.random()*4000);
    imgboxEl.appendChild(imgEl);
    imgEl.src="https://picsum.photos/300?random=" + numEl;
}
});
