const showmore =document.querySelector('.showmore');
const content=document.querySelector('.content');


showmore.addEventListener('click',(e)=>{
    content.classList.toggle('tub');
    if (showmore.innerText === 'SHOW MORE')
    {
    showmore.innerText='SHOW LESS'
    }
    else{showmore.innerText='SHOW MORE'

    }
    
    });