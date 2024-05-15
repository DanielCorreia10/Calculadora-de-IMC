//dom

const peso = document.querySelector('#weight')
const altura = document.querySelector('#height')
const botao = document.querySelector('#calculate')
const resultado = document.querySelector('#resultado')
const situacao = document.querySelector('#situacao')

//evento/funcao

botao.addEventListener('click',()=>{

    event.preventDefault()

    p = peso.value
    a = altura.value/100
    s = ''
    
    imc = Number(p/(a**2))
    

    if (imc < 18.5) {
        s = "abaixo do peso.";
    } 
    else if (imc >= 18.5 && imc < 24.9) {
        s = "com o peso normal.";
    } 
    else if (imc >= 24.9 && imc < 29.9) {
        s = "em sobrepeso.";
    } 
    else if (imc >= 29.9 && imc < 34.9) {
        s = "com obesidade grau 1.";
    } 
    else if (imc >= 34.9 && imc < 39.9) {
        s = "com obesidade grau 2.";
    } 
    else {
        s = "com obesidade grau 3.";
    }
    
    resultado.textContent = `O seu IMC é: ${imc.toFixed(2)} ` 
    situacao.textContent = `Você está ${s}`


})

