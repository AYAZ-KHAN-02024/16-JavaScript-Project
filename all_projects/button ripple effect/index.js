const btnel = document.querySelector(".btn");

btnel.addEventListener("mouseover", (ev)=>{
   const x = ev.pageX - btnel.offsetLeft;
   const y = ev.pageY - btnel.offsetTop;
   btnel.style.setProperty("--xpos",x+ "px");
   btnel.style.setProperty("--ypos",y+ "px");
});