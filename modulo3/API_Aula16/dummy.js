async function getUsers(){
  const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "6615b8338835263fed04a01d"
    }
  
  })
  const users = await resposta.json()
  console.log(users.data);

}

async function getUser(){}

async function createUser(){
  try {
    await fetch("https://dummyapi.io/data/v1/user?created", {
    method: 'POST',
    headers: {
      "app-id": "6615b8338835263fed04a01d",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Lucas",
      email: "lucas123@gmail.com",
    })
  })
} catch (erro) {
  console.log(erro);
}
}
createUser();