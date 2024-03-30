// funções de alta ordem de arrays


const numeros = [40, 34, 67, 23, 10];


numeros.forEach((item, index, arrayCompleto) => {
  console.log(index, item, arrayCompleto);
});

console.clear();

// array.find(): encontrar um item no array

const encontrado = numeros.find((numero) => {
  return numero > 30;
});

console.log(encontrado);

console.clear();

const pessoas = [
  { nome: 'Lucas', idade: 23 },
  { nome: 'Maria', idade: 45 },
  { nome: 'João', idade: 34 },
  { nome: 'Ana', idade: 56 },
];


const idadeIdeal = pessoas.find((pessoa) => {
  return pessoa.idade < 40
})

console.log(idadeIdeal);
console.clear();

const indiceIdadeIdeal = pessoas.findIndex(
  (pessoa) => pessoa.idade < 40
);

console.log(indiceIdadeIdeal);