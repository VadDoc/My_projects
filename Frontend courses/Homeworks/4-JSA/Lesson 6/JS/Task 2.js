// Задание 2. Создайте страницу с несколькими блоками текста. 
// Реализуйте обработчики событий таким образом, чтобы при нажатии на кнопку r–текст становился 
// красного цвета, кнопка g сделает цвет текста зеленым, а b–синим.

window.addEventListener('load', getColor, false);

let paragraphs = document.getElementsByTagName('p');

function getColor() {
  document.getElementById('btnRed').addEventListener('click',
    function () {
      for (par of paragraphs) {
        par.style.color = 'red';
      }
      // Вариант 2
      // for (i = 0; i < paragraphs.length; i++) {
      //   paragraphs[i].style.color = 'red';
      // }
    }, false)

  document.getElementById('btnGreen').addEventListener('click',
    function () {
      for (par of paragraphs) {
        par.style.color = 'green';
      }
    }, false)

  document.getElementById('btnBlue').addEventListener('click',
    function () {
      for (par of paragraphs) {
        par.style.color = 'blue';
      }
    }, false)
}