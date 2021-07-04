// Задание 2
// Реализуйте модуль для работы атрибута watermark, который будет отображать 
// подсказку для поля ввода,в который еще не вводилось значение. 
// Поля вводов с применением модуля должны выглядеть так 
// <inputtype=”text” name=”login”watermark=”Введите свой логин”/>
// При загрузке страницы с такой формой в поле ввода должно отображаться сообщение 
// «Введите свой логин», при клике на поле ввода это сообщение должно исчезать.

window.onload = function () {
  let input = document.form.login;
  let watermark = input.getAttribute('watermark');

  init();

  input.onfocus = function () {
    if (input.value == watermark) {
      input.value = "";
      input.style.color = "black";
      input.style.fontStyle = "normal";
    }
  }

  input.onblur = function () {
    if (input.value == "") {
      init();
    }
  }

  function init() {
    input.value = watermark;
    input.style.color = "gray";
    input.style.fontStyle = "italic";
  }
}