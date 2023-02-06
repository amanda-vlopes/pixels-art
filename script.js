// Requisito 2
// Adicionando cor de fundo de cada elemento da paleta com o for

const cor0 = document.getElementsByClassName('color')[0];
cor0.style.backgroundColor = 'black';

const cor1 = document.getElementsByClassName('color')[1];
cor1.style.backgroundColor = 'rgb(0,191,255)';

const cor2 = document.getElementsByClassName('color')[2];
cor2.style.backgroundColor = 'rgb(127,255,212)';

const cor3 = document.getElementsByClassName('color')[3];
cor3.style.backgroundColor = 'rgb(255,105,180)';

// Requisito 3

// Recuperando botão
const buttonRandonColor = document.getElementById('button-random-color');

// recuperando o elemento de cores
const paletaDeCores = document.getElementsByClassName('color');

// Gerando cor aleatoria:
const gerandoCor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

// Adicionando função:

const corPaleta = () => {
  buttonRandonColor.addEventListener('click', () => {
    for (let index = 0; index < paletaDeCores.length; index += 1) {
      if (index === 0) {
        paletaDeCores[0].style.backgroundColor = ' black';
      } else {
        paletaDeCores[index].style.backgroundColor = gerandoCor();
      }
    }
  });
};
corPaleta();
