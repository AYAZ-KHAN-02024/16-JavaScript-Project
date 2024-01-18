const kits = ["crash","kick","snare","tom"];

const boxEl = document.querySelector(".box");


kits.forEach((kit) =>{
    const btnEl = document.createElement("button");
    const audioEl = document.createElement("audio");
    boxEl.appendChild(btnEl);
    btnEl.classList.add("btn");
    btnEl.innerText= kit ;
    btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
    audioEl.src = "sounds/" + kit + ".mp3";
    boxEl.appendChild(audioEl);
    btnEl.addEventListener("click", ()=>{
       audioEl.play(); 
       audioEl.currentTime=0 ;
    });
    window.addEventListener('keydown', (e)=>{
       if(e.key== kit.slice(0,1)){
        audioEl.play();
        audioEl.currentTime=0 ;
        btnEl.style.transform='scale(.9)';
        setTimeout(() => {
            btnEl.style.transform='scale(1)';
        }, 100);
        
       }
    });
    
});