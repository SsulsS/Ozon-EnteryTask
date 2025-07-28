const loader = document.querySelector('.progress__bar')
const input = document.querySelector('.progress__input')
const container = document.querySelector('.progress__container')
const checkboxAnimated = document.querySelector('.progress__animated')
const checkboxHide = document.querySelector('.progress__hide')
const idAnimated = 'animated'
const idHide = 'hide'




input.addEventListener('input', ()=>{
    if (input.value>=100){
        input.value=100 
    }
    if (input.value<=0){
        input.value=0 
    }
    loader.setAttribute('style', `--value: ${input.value} `)
})

checkboxAnimated.addEventListener('change',()=>{
    if (checkboxAnimated.checked){
        loader.setAttribute('id', 'animated')
    }else{
        loader.removeAttribute('id')
    }
})

checkboxHide.addEventListener('change', ()=>{
    if (checkboxHide.checked){
        loader.setAttribute('id', 'hide')
        container.classList.add('progress__container_hide')
    }else{
        loader.removeAttribute('id')
        container.classList.remove('progress__container_hide')
        if (checkboxAnimated.checked){
            loader.setAttribute('id', 'animated')
        }    
    }
})