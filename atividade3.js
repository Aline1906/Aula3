// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, 
//se o resto dessa divisão for 
//zero deverá imprimir no console o valor e dizer que ele é par.

function divisao (numero1, numero2){

    if(numero1%numero2 === 0){
        console.log("O número é par")
        return numero1 / numero2
    }
}

console.log("O resultado é :" + divisao(3,5))