// Задание
// Создать страницу Отели столицы Украины.
// Цель: научиться работать с картами Google, скрывать и отображать карты по нажатию на кнопку

window.addEventListener('load', init, false);

let btnHilton,
  mapHilton,
  btnOpera,
  mapOpera,
  btnRiviera,
  mapRiviera,
  btnPremier,
  mapPremier;

function init() {
  mapHilton = document.querySelector('#mapHilton');
  mapOpera = document.querySelector('#mapOpera');
  mapRiviera = document.querySelector('#mapRiviera');
  mapPremier = document.querySelector('#mapPremier');

  btnHilton = document.querySelector('#btnHilton');
  btnOpera = document.querySelector('#btnOpera');
  btnRiviera = document.querySelector('#btnRiviera');
  btnPremier = document.querySelector('#btnPremier');

  btnHilton.addEventListener('click', showHiltonMap, false)
  btnOpera.addEventListener('click', showOperaMap, false)
  btnRiviera.addEventListener('click', showRivieraMap, false)
  btnPremier.addEventListener('click', showPremierMap, false)
}

function showHiltonMap() {
  mapHilton.className = 'show-map';
  this.value = 'Спрятать карту';
  this.addEventListener('click', hidenHiltonMap, false)
}

function hidenHiltonMap() {
  mapHilton.className = 'hiden-map';
  this.value = 'Показать на карте';
  this.removeEventListener('click', hidenHiltonMap, false)
  this.addEventListener('click', showHiltonMap, false)
}

function showOperaMap() {
  mapOpera.className = 'show-map';
  this.value = 'Спрятать карту';
  this.addEventListener('click', hidenOperaMap, false)
}

function hidenOperaMap() {
  mapOpera.className = 'hiden-map';
  this.value = 'Показать на карте';
  this.removeEventListener('click', hidenOperaMap, false)
  this.addEventListener('click', showOperaMap, false)
}

function showRivieraMap() {
  mapRiviera.className = 'show-map';
  this.value = 'Спрятать карту';
  this.addEventListener('click', hidenRivieraMap, false)
}

function hidenRivieraMap() {
  mapRiviera.className = 'hiden-map';
  this.value = 'Показать на карте';
  this.removeEventListener('click', hidenRivieraMap, false)
  this.addEventListener('click', showRivieraMap, false)
}

function showPremierMap() {
  mapPremier.className = 'show-map';
  this.value = 'Спрятать карту';
  this.addEventListener('click', hidenPremierMap, false)
}

function hidenPremierMap() {
  mapPremier.className = 'hiden-map';
  this.value = 'Показать на карте';
  this.removeEventListener('click', hidenPremierMap, false)
  this.addEventListener('click', showPremierMap, false)
}