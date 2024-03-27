// javascript - funções

function saudacao(nomeEstudante, cursoEstudante) {
  return `Olá ${nomeEstudante}, seja bem-vindo ao curso de ${cursoEstudante}`;
}

const mensagem = saudacao('Maria', 'HTML');
console.log(mensagem);

function somar(numero1, numero2){
  return numero1 + numero2;
}

const resultado = somar(10, 5);
console.log(resultado + 10);

// funções anônimas
const dobroDoNumero = function (numero){
  return numero * 2;
}

const dobro = dobroDoNumero(5);
console.log(dobro);

// arrow functions
const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
}

const resultadoSubtracao = subtrair(10, 5);
console.log(resultadoSubtracao);

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploNumero = numero => numero * 3;


