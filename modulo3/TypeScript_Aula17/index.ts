let numero: number = 10;

const pi = 3.1416;

let nome = 'Lucas';

const nomeUsuario = prompt('Digite seu nome: ');

console.log(nomeUsuario?.toLocaleLowerCase());

const numeros:number[] = [1,2,3,4,5,6,7,8,9,10];

// const misto:(number | string )[] = ['Lucas', 10, 3.1416];

const idades: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
idades.push(23);
idades.push(45);

const menoresIdade = idades.filter((idade) => idade < 18);
console.log(menoresIdade);

//interface
interface Person{
  nome: string,
  idade: number,
  profissao: string
  altura: number,
}

type Persona = {
    nome: string,
    idade: number,
    profissao: string
    altura: number,
}

const pessoa = {
    nome: 'Lucas',
    idade: 23,
    profissao: 'Desenvolvedor',
    altura: 1.70
};

function chooseNumber(numero1:number, numero2:number, criterio?: 'greater' | 'lower') {
  const numeroAleatorio = Math.random();
  if(numeroAleatorio > 0.5) return numero1;
  return numero2;
}
const numeroEscolhido = chooseNumber(10, 20);
console.log("numeroEscolhido: ",numeroEscolhido);
