// Задание 1. Разработайте страницу «текстовый редактор». На странице должно быть размешено поле 
// ввода и кнопка «Сохранить» (фактического сохранения данных из поля ввода делать не надо). 
// Если пользователь пытается закрыть окно браузера не «сохранив» данные в поле ввода, должно 
// запускаться окно, которое потребует подтверждения операции закрытия окна.

window.addEventListener('DOMContentLoaded', init, false);

let isTextSaved = true;

function init() {
  let text = document.getElementById('text');
  let button = document.getElementById('submit');
  text.addEventListener('click', handlerSaveText, false);
  button.addEventListener('click', handlerButton, false);
}

function handlerButton(event) {
  isTextSaved = true;
}

function handlerSaveText(event) {
  isTextSaved = false;
}

window.onbeforeunload = function (e) {
  if (isTextSaved) {
    return;
  }
  return "";
}