const readmorebtn=document.querySelector('.buttonmore');
const text = document.querySelector('.text');

readmorebtn.addEventListener('click',(e)=>{
    text.classList.toggle('spanmore');
    if (readmorebtn.innerText === 'READ MORE'){
        readmorebtn.innerText='READ LESS';}
    else{
        readmorebtn.innerText='READ MORE';
    }    
    
})