const fs = require('fs');

// * Callbacks
// fs.readFile('./arquivo.txt', (erro, conteudo) => {
//   if(erro){
//     console.log('Erro ao ler o arquivo: \n', erro);
//   } else {
//     console.log(conteudo.toString());
//   }
// });

// console.clear();

// setTimeout(() => {
//   console.log('Executando após 2 segundos...');
// }, 2 * 1000);

// // * Promises

function lerArquivo(){
return new Promise((resolve, reject) => {
  fs.readFile('./arquivo.txt', (erro, conteudo) => {
    if(erro){
      reject('Erro ao ler o arquivo: \n', erro);
    } else {
      resolve(conteudo.toString());
    }
  });
})
}

// lerArquivo()
//   .then((retornoResolvePromessa) => {
//   console.log("Deu certo \n", retornoResolvePromessa);
// })
//   .catch((erro) => {
//   console.log("Deu erro: ", erro);
// })
//   .finally(() => {
//     console.log('Finalizou a promessa')
//   });

// * Async/Await
async function lerDados(){
 try {
  const retornoPromessa = await lerArquivo();
  console.log('Deu certo \n', retornoPromessa);
  } catch (erro) {
    console.log('Deu erro: ', erro);
  }
}

lerDados();