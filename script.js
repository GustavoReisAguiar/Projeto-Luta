
function teste(){
    let input = document.querySelector('input')
    let botao = document.querySelector('.botao')

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type','password')
        botao.innerText = "mostar senha"
    }else {
        input.setAttribute('type','text')
        botao.innerText = "ocultar senha"
    }

}
