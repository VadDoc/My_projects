// Создайте страницу с произвольным количеством изображений.
// Создайте сценарий, который выведет адреса всех изображений,которые загруженные на страницу, 
// после чего с интервалом в одну секунду по очередикаждому изображению добавит красную рамку.

window.addEventListener('load', init, false);

let images = document.images;

function init() {
  let button = document.getElementById('button');
  button.addEventListener('click', handlerButton, false);
}

function handlerButton() {
  showImageSrc();
  createImageBorder();
}

function showImageSrc() {
  let divText = document.getElementById('divText');

  for (let i = 0; i < images.length; ++i) {
    let imageSrc = images[i].getAttribute('src');
    divText.innerHTML += 'src = ' + imageSrc + '<br>';
  }
}
// Задержка итераций в цикле for
function createImageBorder() {
  for (let i = 0; i < images.length; ++i) {
    setTimeout(function () {
      images[i].style.border = '5px solid red';
    }, 1000 * (i + 1))
  }
}