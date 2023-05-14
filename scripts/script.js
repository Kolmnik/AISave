const imgContainer = document.querySelectorAll('.container')

const ToSquere = (elem) => {
    let height = elem.offsetWidth + elem.offsetWidth*0.4
    elem.style.height = height  + 'px'
}

for (let i=0; i<imgContainer.length; i++){
    ToSquere(imgContainer[i])
}




console.log(imgContainer)
