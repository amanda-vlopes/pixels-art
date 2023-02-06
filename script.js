// Requisito 2
// Adicionando cor de fundo de cada elemento da paleta com o for

let cor0 = document.getElementsByClassName('color')[0];
cor0.style.backgroundColor = 'black';

let cor1 = document.getElementsByClassName('color')[1];
cor1.style.backgroundColor = 'rgb(0,191,255)';

let cor2 = document.getElementsByClassName('color')[2];
cor2.style.backgroundColor = 'rgb(127,255,212)';

let cor3 = document.getElementsByClassName('color')[3];
cor3.style.backgroundColor = 'rgb(255,105,180)';

// criando a função com o for

// Primeira opção pensada porém com complexidade maior que 6

// const coresPaleta = () => {
//   for (let index = 0; index < paletaDeCores.length; index += 1) {
//     switch (index) {
//     case 0:
//       paletaDeCores[0].style.backgroundColor = 'black';
//       break;
//     case 1:
//       paletaDeCores[1].style.backgroundColor = 'rgb(0,191,255)';
//       break;
//     case 2:
//       paletaDeCores[2].style.backgroundColor = 'rgb(127,255,212)';
//       break;
//     case 3:
//       paletaDeCores[3].style.backgroundColor = 'rgb(255,105,180)';
//       break;
//     }
//   }
// };
// coresPaleta();

// recuperando o elemento
const paletaDeCores = document.getElementsByClassName('color');

// Gerando cor aleatoria:

// const gerandoCor = () => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r},${g},${b})`;
// };

// const corPaleta = () => {
//   for (let index = 0; index < paletaDeCores.length; index += 1) {
//     if (index === 0) {
//       paletaDeCores[0].style.backgroundColor = ' black';
//     } else {
//       paletaDeCores[index].style.backgroundColor = gerandoCor();
//     }
//   }
// };
// corPaleta();
