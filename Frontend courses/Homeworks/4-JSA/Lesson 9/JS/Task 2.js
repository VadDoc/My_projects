// Задание 2
// Создайте  страницу-галерею.  На  странице  должен  выводиться  список  
// картинок preview небольших размеров. При нажатии на каждое изображение превью должно 
// отображаться большое изображение.

window.addEventListener('load', init, false);

function init() {
  document.images.circle.addEventListener('click', showCircle, false);
  document.images.triangle.addEventListener('click', showTriangle, false);
  document.images.square.addEventListener('click', showSquare, false);
  document.images.rectangle.addEventListener('click', showRectangle, false);
}

function showCircle() {
  document.images.figures.src = './images/circ.png';
  document.images.figures.alt = 'Circle';
}

function showTriangle() {
  document.images.figures.src = './images/tri.jpg';
  document.images.figures.alt = 'Triangle';
}

function showSquare() {
  document.images.figures.src = './images/sq.jpg';
  document.images.figures.alt = 'Square';
}

function showRectangle() {
  document.images.figures.src = './images/rect.png';
  document.images.figures.alt = 'Rectangle';
}