const textEl = document.querySelector(".text");

const a = [" youtuber" , " web developer", " freelancer" ," student",]

let aindex = 0;
let cindex = 0;
update();
function update(){
    cindex++
    textEl.innerHTML= `<h1>i am a${a[aindex].slice(0,cindex)}</h1>`;
     
    
     if(cindex===a[aindex].length){
        aindex++
        cindex=0
     }
     if (aindex=== a.length){
        aindex = 0 ;
     }
     setTimeout(update,200);
     
}

