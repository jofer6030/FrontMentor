const parra = document.querySelectorAll('.container-title');
const parraRes = document.querySelectorAll('.resp-question');

parra.forEach((p,i) => {
    p.addEventListener('click', (e) =>{
        
        if(e.target.classList.contains('question-title')){
            parraRes.forEach( (pa, i) =>{
                pa.classList.remove('visible') 
            })
        }
        parraRes[i].classList.add('visible')     
    })
})