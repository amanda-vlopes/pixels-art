// Requisito 2 - Adicione à página uma paleta contendo quatro cores distintas.
// Adicionando cor de fundo de cada elemento da paleta com o for

const cor0 = document.getElementsByClassName('color')[0];
cor0.style.backgroundColor = 'black';

const cor1 = document.getElementsByClassName('color')[1];
cor1.style.backgroundColor = 'rgb(0,191,255)';

const cor2 = document.getElementsByClassName('color')[2];
cor2.style.backgroundColor = 'rgb(127,255,212)';

const cor3 = document.getElementsByClassName('color')[3];
cor3.style.backgroundColor = 'rgb(255,105,180)';

// Requisito 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.

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

// Função requisito 4 sem armazenar as cores no localStorage

// const corPaleta = () => {
//   buttonRandonColor.addEventListener('click', () => {
//     for (let index = 0; index < paletaDeCores.length; index += 1) {
//       if (index === 0) {
//         paletaDeCores[0].style.backgroundColor = 'rgb(0,0,0)';
//       } else {
//         paletaDeCores[index].style.backgroundColor = gerandoCor();
//       }
//     }
//   });
// };
// corPaleta();

// Requisito 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página. - Função do requisito 4 usada para armazenar as cores geradas.

const corPaleta = () => {
  buttonRandonColor.addEventListener('click', () => {
    const coresAleatorias = [];
    for (let index = 0; index < paletaDeCores.length; index += 1) {
      if (index === 0) {
        paletaDeCores[0].style.backgroundColor = 'rgb(0,0,0)';
      } else {
        paletaDeCores[index].style.backgroundColor = gerandoCor();
      }
      // Armazenando as cores em um array
      coresAleatorias.push(paletaDeCores[index].style.backgroundColor);
    }
    // Armazenando as cores armazenadas no meu localStorage
    localStorage.setItem('colorPalette', JSON.stringify(coresAleatorias));
  });
};
corPaleta();

// Função para atribuir as cores de fundo da minha paleta como as cores armazenadas no localStorage

const armazenandoCores = JSON.parse(localStorage.getItem('colorPalette'));

const recarregaCores = () => {
  if (armazenandoCores !== null) {
    for (let index = 0; index < paletaDeCores.length; index += 1) {
      paletaDeCores[index].style.backgroundColor = armazenandoCores[index];
    }
  }
};
recarregaCores();

// Requisito 6 - Adicione à página um quadro contendo 25 pixels.

const quadroPixel = document.getElementById('pixel-board');

const quadroPixel25 = () => {
  for (let index = 0; index < 25; index += 1) {
    const quadradoPixel = document.createElement('div');
    quadradoPixel.className = 'pixel';
    quadroPixel.appendChild(quadradoPixel);
  }
};
quadroPixel25();

// Requisito 7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

quadroPixel.style.width = '300px';

// Requisito 8 - Defina a cor preta como cor inicial da paleta de cores

cor0.classList.add('selected');

// Requisito 9 - Crie uma função para selecionar uma cor na paleta de cores.

// const selecionandoCor = () => {
//     paletaDeCores[index].addEventListener('click', (event) => {
//       if (event.target.classList.contains('selected')) {
//         event.target.classList.remove('selected');
//       } else {
//         event.target.classList.add('selected');
//       }
//     });
//   };

// selecionandoCor();

const selecionandoCor = () => {
  for (let index = 0; index < paletaDeCores.length; index += 1) {
    paletaDeCores[index].addEventListener('click', (event) => {
      const corSelecionada = document.getElementsByClassName('selected')[0];
      corSelecionada.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
};

selecionandoCor();

// Requisito 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.

const corPixel = document.getElementsByClassName('pixel');

const colorindoPixel = () => {
  for (let index = 0; index < corPixel.length; index += 1) {
    corPixel[index].addEventListener('click', (event) => {
      const corFundo = document.getElementsByClassName('selected')[0].style.backgroundColor;
      event.target.style.backgroundColor = corFundo;
    });
  }
};

colorindoPixel();
