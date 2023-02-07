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

// Requisito 4

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

// Adicionando função de armazenamento:

const armazenandoCores = (cores) => {
  localStorage.setItem('colorPalette', JSON.stringify(cores));
  JSON.parse(localStorage.getItem('colorPalette'));
};

// const mantendoCores = () => {
//   if (localStorage !== null) {

//   }
// }
// JSON.parse(localStorage.getItem('colorPalette'))

// Adicionando função:

const coresAleatorias = [];

const corPaleta = () => {
  buttonRandonColor.addEventListener('click', () => {
    for (let index = 0; index < paletaDeCores.length; index += 1) {
      if (index === 0) {
        paletaDeCores[0].style.backgroundColor = 'rgb(0,0,0)';
      } else {
        paletaDeCores[index].style.backgroundColor = gerandoCor();
      }
      coresAleatorias.push(paletaDeCores[index].style.backgroundColor);
    }
    armazenandoCores(coresAleatorias);
  });
};
corPaleta();

// Opção sem adicionar função por fora

// const corPaleta = () => {
//   buttonRandonColor.addEventListener('click', () => {
//     for (let index = 0; index < paletaDeCores.length; index += 1) {
//       if (index === 0) {
//         paletaDeCores[0].style.backgroundColor = 'rgb(0,0,0)';
//       } else {
//         paletaDeCores[index].style.backgroundColor = gerandoCor();
//       }
//       coresAleatorias.push(paletaDeCores[index].style.backgroundColor);
//     }
//     localStorage.setItem('colorPalette', JSON.stringify(coresAleatorias));
//     const armazenandoCores = JSON.parse(localStorage.getItem('colorPalette'));
//     console.log(armazenandoCores);
//   });
// };
// corPaleta();

// Requisito 6

const quadroPixel = document.getElementById('pixel-board');

const quadroPixel25 = () => {
  for (let index = 0; index < 25; index += 1) {
    const quadradoPixel = document.createElement('div');
    quadradoPixel.className = 'pixel';
    quadroPixel.appendChild(quadradoPixel);
  }
};
quadroPixel25();
