var btnChecks = document.querySelectorAll(".btnCheck")


// Percorre os checkbox, quando clicados mudam suas classes
btnChecks.forEach((element)=>{
    element.addEventListener('click', ()=>{
        element.classList.toggle('ri-checkbox-fill')
        element.classList.toggle('ri-checkbox-blank-line')
    })
})


