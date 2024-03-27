const prompt = require('prompt-sync')();

let maiorNumero = 0;
let numeroInformado;

for (let i = 0; i < 5; i++) {
    numeroInformado = Number(prompt('Informe um número positivo: '));

    if (numeroInformado > maiorNumero) {
        maiorNumero = numeroInformado;
    }
}

console.log('O maior número informado é: ', maiorNumero);
