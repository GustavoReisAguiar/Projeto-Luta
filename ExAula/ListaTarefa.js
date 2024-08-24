//Declaração de Elementos
const input = document.querySelector('input')
//Criação da Função
function clickEnter(event){
    if(event.key === 'Enter'){    
            const ul = document.querySelector('ul')
            let newLi = document.createElement('li')

            newLi.innerHTML= input.value
            ul.appendChild(newLi)    
            input.value = ""    
    }    
}
//Adicionando evento
input.addEventListener('keyup', clickEnter)

