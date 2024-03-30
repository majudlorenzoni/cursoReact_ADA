// high order functions
// * Função que retorna outra função como parâmetro

function welcome(courseName){
  return (studentName) => {
    console.log(`Seja bem-vindo ao curso de ${courseName}, ${studentName}!`);
  }
}

const displayWelcomeToJS = welcome('JavaScript');
displayWelcomeToJS('Lucas');

console.clear();
// * Função que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// operacao é uma função que realiza a operação entre os dois números, precisa receber dois números

const calcular = (num1, num2, operacao) => operacao(num1, num2);
console.log(calcular(10, 5, somar));



