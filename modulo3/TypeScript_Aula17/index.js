var numero = 10;
var pi = 3.1416;
var nome = 'Lucas';
var nomeUsuario = prompt('Digite seu nome: ');
console.log(nomeUsuario === null || nomeUsuario === void 0 ? void 0 : nomeUsuario.toLocaleLowerCase());
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const misto:(number | string )[] = ['Lucas', 10, 3.1416];
var idades = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
idades.push(23);
idades.push(45);
var menoresIdade = idades.filter(function (idade) { return idade < 18; });
console.log(menoresIdade);
var pessoa = {
    nome: 'Lucas',
    idade: 23,
    profissao: 'Desenvolvedor',
    altura: 1.70
};
function chooseNumber(numero1, numero2, criterio) {
    var numeroAleatorio = Math.random();
    if (numeroAleatorio > 0.5)
        return numero1;
    return numero2;
}
var numeroEscolhido = chooseNumber(10, 20);
console.log("numeroEscolhido: ", numeroEscolhido);
