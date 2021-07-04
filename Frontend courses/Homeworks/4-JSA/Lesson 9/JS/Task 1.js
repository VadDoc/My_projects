// Задание 1
// Создайте страницу с тремя кнопками, при нажатии на каждую из кнопок должно меняться изображение,
// выводимое на странице.

window.addEventListener('load', init, false);

function init() {
  document.myForm.btnTriangle.addEventListener('click', showTriangle, false);
  document.myForm.btnSquare.addEventListener('click', showSquare, false);
  document.myForm.btnCircle.addEventListener('click', showCircle, false);
}

function showTriangle() {
  document.images.imgFigure.src = './images/tri.jpg';
  document.images.imgFigure.alt = 'Triangle';
}

function showSquare() {
  document.images.imgFigure.src = './images/sq.jpg';
  document.images.imgFigure.alt = 'Square';
}

function showCircle() {
  document.images.imgFigure.src = './images/circ.png';
  document.images.imgFigure.alt = 'Circle';
}