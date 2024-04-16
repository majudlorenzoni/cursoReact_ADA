
// Seleção pelo nome da tag
const h1 = document.getElementsByTagName('h1');
console.log(h1);

// Seleção pelo nome da classe
const paragrafos = document.getElementsByClassName('paragrafo');
console.log(paragrafos);

// Seleção pelo nome do id
const id = document.getElementById('unico');
console.log(id);

//Seleção pelo name da tag
const emailInput = document.getElementsByName('email');
console.log(emailInput);

// Query Selector

const primeiroParagrafo = document.querySelector('p');
const todosParagrafos = document.querySelectorAll('p');

console.log(primeiroParagrafo);
console.log(todosParagrafos);

console.clear();

console.log("textContent: ", primeiroParagrafo.textContent);
console.log("innerText: ", primeiroParagrafo.innerHTML);

primeiroParagrafo.textContent = "Novo Texto";

console.clear();

const listaUl = document.querySelector('ul#lista');
const listaLis = document.querySelectorAll('ul > li');

const novaLi = document.createElement('li');
novaLi.textContent = "Segundo Item";

console.log(novaLi);

listaUl.appendChild(novaLi);

document.insertBefore(listaLis[1], novaLi);