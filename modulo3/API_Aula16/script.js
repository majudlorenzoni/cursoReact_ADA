console.log("Fetch Api")

// fetch("https://viacep.com.br/ws/01001000/json/")
//   .then((resposta) => {
//     resposta.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

async function obterDados() {
  try {

    const resposta = await fetch("https://viacep.com.br/ws/01001000/json/");
    const dados = await resposta.json();
    
    console.log(dados);
  } catch (erro) {
    console.log(erro);
  } finally {
    console.log("Finalizou")
  }  
}

obterDados();