//dom

const peso = document.querySelector('#weight')
const altura = document.querySelector('#height')
const botao = document.querySelector('#calculate')
const resultado = document.querySelector('#resultado')

//evento/funcao

botao.addEventListener('click',()=>{

    event.preventDefault()

    p = peso.value
    a = altura.value/100
    
    imc = p/(a**2)

    resultado.textContent = `O seu IMC é: ${imc.toFixed(2)}` 

})

