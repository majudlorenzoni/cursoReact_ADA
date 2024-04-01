// every - verifica se todos os elementos do array passam por uma condição

const numeros = [40, 34, 67, 89, 23, 16, 10];

const positivos = numeros.every((elemento) => elemento > 0); // true

console.log(positivos);

const retorno = numeros.some((elemento) => elemento > 0); 
console.log(retorno); 


const novoArray = numeros.map((elemento) => {
    return elemento * 2;
});
console.log(novoArray);

const carrinho = [
  { produto: "Feijão", preco: 8.50, quantidade: 3 },
  { produto: "Arroz", preco: 5.50, quantidade: 1 },
  { produto: "Macarrão", preco: 4.50, quantidade: 2 },
  { produto: "Carne", preco: 25.50, quantidade: 1 },
]

const total = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade
  }
});
console.log(total);

console.clear();

const numeros2 = [40, 34, 67, 89, 23, 16, 10];

const parEncontrado = numeros2.find((valor) => valor % 2 === 0);
console.log(parEncontrado);

const pares = numeros2.filter((valor) => valor % 2 === 0);
console.log(pares);

const alunos = [
  { nome: "Lucas", idade: 23, media: 8.5 },
  { nome: "Maria", idade: 25, media: 7.5 },
  { nome: "João", idade: 20, media: 6.5 },
  { nome: "Pedro", idade: 24, media: 9.5 },
]

const alunos85 = alunos.filter((aluno) => aluno.media >= 8.5);
console.log(alunos85);

console.clear();

const numeros3 = [40, 34, 67, 89, 23, 16, 10];

const soma = numeros3.reduce((acumulador, elemento) => {
  return elemento + acumulador;
});


const media = numeros3.reduce((acumulador, elemento, _, arrayCompleto) => {
  return (elemento / arrayCompleto.length) + acumulador;
}, 0);

const somaPares = numeros3.reduce((acumulador, elemento) => {
  if (elemento % 2 === 0) {
    return acumulador + elemento;
  } else {
    return acumulador;
  }
}, 0);

