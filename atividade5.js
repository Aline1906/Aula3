//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function calculadora (num1, num2){

   let operacao = 'dividir'

  switch(operacao){

      case 'somar':
          return num1 + num2
          break;

        case 'subtrair':
            return num1 - num2
            break;

        case 'multiplicar':
            return num1 * num2
            break;

        case 'dividir':
            return num1 / num2
            break;
            
        default:
            console.log("Passe uma opção válida") 
            }
    
    }

    console.log(calculadora(25,5))