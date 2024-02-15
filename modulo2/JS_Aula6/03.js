const readlineSync = require("readline-sync");  // Importa o módulo readline-sync

const idade = prompt.question("Qual é a sua idade?");  

const idadeNumber = Number(idade);  

console.log(idadeNumber, typeof idadeNumber);  