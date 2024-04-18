const diminuir = document.querySelector('#diminuir');
const aumentar = document.querySelector('#aumentar');

const contador = document.querySelector('#contador');

const input = document.querySelector('#input');

input.addEventListener('input', () => {
  console.log(input.value);
});

aumentar.addEventListener('click', () => {
  contador.innerText = parseInt(contador.innerText) + 1;
}
);

diminuir.addEventListener('click', () => {
  contador.innerText = parseInt(contador.innerText) - 1;
}
);

// adicionando estilos

contador.style.color = 'red';
contador.style.fontSize = '50px';
contador.style.fontWeight = 'bold';
contador.style.backgroundColor = 'black';

const tema = document.querySelector('#tema');
let darkMode = false;
window.onload = () => {
  const isDark = localStorage.getItem("isDark");
  darkMode = isDark === 'true';
}

tema.addEventListener('click', () => {
  darkMode = !darkMode;

  localStorage.setItem("isDark", darkMode);

  const body = document.querySelector('body');

  if(darkMode){
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
});