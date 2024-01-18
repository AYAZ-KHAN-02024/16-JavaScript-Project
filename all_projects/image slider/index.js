const boxEl = document.querySelector('.box');
const btnEl = document.querySelector('.btn');
const btn1El = document.querySelector('.btn1');

btnEl.addEventListener('click',()=>{
    const oldImg = boxEl.querySelector('img');
    if (oldImg) {
        oldImg.remove();
    }
    const newImg = document.createElement("img");
    boxEl.appendChild(newImg);
    newImg.src = `https://picsum.photos/400/250?random=${Math.floor(Math.random()*1000)}`; 
    
})