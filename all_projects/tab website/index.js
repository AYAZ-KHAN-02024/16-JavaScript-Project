// const tabs = document.querySelector('.tabs')

// const btns = document.querySelectorAll('.btnn')

// const articles = document.querySelectorAll('.content');

// tabs.addEventListener('click', (event)=>{
//     const id = event.target.dataset.id;

//     if(id){
//         btns.forEach((btn)=>{
//             btn.classList.remove('live');
//         });
//         event.target.classList.add('live');
//         articles.forEach((article)=>{
//         article.forEach.remove('live');
//         });
//         const element = document.getElementById(id);
//         element.classList.add('live');
//     }
// })

const btn1El = document.getElementById('btn1');
const btn2El = document.getElementById('btn2');
const btn3El = document.getElementById('btn3');
const step1El = document.getElementById('step1');
const step2El = document.getElementById('step2');
const step3El = document.getElementById('step3');
    
btn2El.addEventListener('click',()=>{
    step2El.classList.add('live');
    step1El.classList.remove('live');
    step3El.classList.remove('live');
});

btn1El.addEventListener('click',()=>{
    step1El.classList.add('live');
    step2El.classList.remove('live');
    step3El.classList.remove('live');
});

btn3El.addEventListener('click',()=>{
    step3El.classList.add('live');
    step1El.classList.remove('live');
    step2El.classList.remove('live');
});