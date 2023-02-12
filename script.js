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

// Elementos recuperados fora das funções:

const buttonRandonColor = document.getElementById('button-random-color');
const paletaDeCores = document.getElementsByClassName('color');
const quadroPixel = document.getElementById('pixel-board');
const corPixel = document.getElementsByClassName('pixel');

// Requisito 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.

// Gerando cor aleatoria:
const gerandoCor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

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

// Função para atribuir as cores de fundo da minha paleta como as cores armazenadas no localStorage

const armazenandoCores = JSON.parse(localStorage.getItem('colorPalette'));

const recarregaCores = () => {
  if (armazenandoCores !== null) {
    for (let index = 0; index < paletaDeCores.length; index += 1) {
      paletaDeCores[index].style.backgroundColor = armazenandoCores[index];
    }
  }
};

// Requisito 6 - Adicione à página um quadro contendo 25 pixels.

const quadroPixel25 = () => {
  for (let index = 0; index < 25; index += 1) {
    const quadradoPixel = document.createElement('div');
    quadradoPixel.className = 'pixel';
    quadroPixel.appendChild(quadradoPixel);
  }
};

// Requisito 7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

quadroPixel.style.width = '240px';

// Requisito 8 - Defina a cor preta como cor inicial da paleta de cores

cor0.classList.add('selected');

// Requisito 9 - Crie uma função para selecionar uma cor na paleta de cores.

const selecionandoCor = () => {
  for (let index = 0; index < paletaDeCores.length; index += 1) {
    paletaDeCores[index].addEventListener('click', (event) => {
      const corSelecionada = document.getElementsByClassName('selected')[0];
      corSelecionada.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
};

// Requisito 12 - Função com array para armazenar todas as cores:

const salvandoPixel = (chave) => {
  const arrayCores = [];
  for (let index = 0; index < corPixel.length; index += 1) {
    arrayCores.push(corPixel[index].style.backgroundColor);
  }
  localStorage.setItem(chave, JSON.stringify(arrayCores));
};

// Função de colorir os pixels - Requisito 10

const colorindoPixel = () => {
  for (let index = 0; index < corPixel.length; index += 1) {
    corPixel[index].addEventListener('click', (event) => {
      const evento = event;
      const corFundo = document.getElementsByClassName('selected')[0].style.backgroundColor;
      evento.target.style.backgroundColor = corFundo;
      salvandoPixel('pixelBoard');
    });
  }
};

// Requisito 11 - Crie um botão que retorne a cor do quadro para a cor inicial.

const limpaPixel = () => {
  const buttonReset = document.getElementById('clear-board');
  buttonReset.addEventListener('click', () => {
    for (let index = 0; index < corPixel.length; index += 1) {
      if (corPixel[index].style.backgroundColor !== 'white') {
        corPixel[index].style.backgroundColor = 'white';
      }
      salvandoPixel('pixelBoard');
    }
  });
};

// Requisito 12 - Função para reatribuir o valor das divs

const armazenandoPixels = JSON.parse(localStorage.getItem('pixelBoard'));

const recarregaPixels = () => {
  if (armazenandoPixels !== null) {
    for (let index = 0; index < corPixel.length; index += 1) {
      corPixel[index].style.backgroundColor = armazenandoPixels[index];
    }
  }
};

// Requisito 13 - Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels.
// Resquisito 14 - Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels.

// Recuperando os elementos que serão utilizados na função

const buttonVQV = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

let numero;

// Função de verificar tamanho definido no input

const verificacaoPixel = () => {
  numero = boardSize.value;
  if (numero <= 0) {
    alert('Board inválido!');
  } else if (numero <= 5) {
    numero = 5;
  } else if (numero >= 50) {
    numero = 50;
  }
  for (let index = 0; index < numero * numero; index += 1) {
    const novoPixel = document.createElement('div');
    novoPixel.className = 'pixel';
    novoPixel.style.backgroundColor = 'white';
    quadroPixel.appendChild(novoPixel);
  }
};

const novoQuadroPixel = () => {
  buttonVQV.addEventListener('click', () => {
    quadroPixel.innerHTML = '';
    numero = boardSize.value;
    verificacaoPixel();
    const larguraMaxima = (numero) * 42;
    quadroPixel.style.width = `${larguraMaxima}px`;
    colorindoPixel();
    localStorage.setItem('boardSize', JSON.stringify(quadroPixel.innerHTML));
    localStorage.setItem('numero', JSON.stringify(numero));
  });
};

// Requisito 15 - Crie uma função para manter o tamanho novo do board ao recarregar a página

const armazenandoDivs = JSON.parse(localStorage.getItem('boardSize'));
const numeroInput = JSON.parse(localStorage.getItem('numero'));

const recarregaDivs = () => {
  if (armazenandoDivs !== null && numeroInput !== null) {
    quadroPixel.innerHTML = armazenandoDivs;
    const larguraMaxima = (numeroInput) * 42;
    quadroPixel.style.width = `${larguraMaxima}px`;
  }
};

window.onload = () => {
  corPaleta();
  recarregaCores();
  quadroPixel25();
  selecionandoCor();
  novoQuadroPixel();
  recarregaDivs();
  colorindoPixel();
  limpaPixel();
  recarregaPixels();
};
