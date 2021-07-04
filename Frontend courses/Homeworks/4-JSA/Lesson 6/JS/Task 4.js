// Задание 4. Разработайте страницу, которая будет выводить сообщение «сохранено» 
// при нажатии на клавиши Ctrl + S, «выбрано все» при нажатии на Ctrl + A и «сохранено все» 
// при нажатии на комбинацию Ctrl+ Shift + S.

window.addEventListener('DOMContentLoaded', handlerKey, false);

function handlerKey() {
  window.addEventListener('keydown', saveText, false);
}

function saveText(e) {
  let div = document.getElementById('div');
  if (e.code == "ControlLeft") {
    window.onkeydown = function (e) {
      if (e.code == "KeyS") {
        div.innerHTML = 'Сохранено';
      } else if (e.code == "KeyA") {
        div.innerHTML = 'Выбрано все';
      } else if (e.code == "ShiftLeft") {
        window.onkeydown = function (e) {
          if (e.code == "KeyS") {
            div.innerHTML = 'Сохранено все';
          }
        }
      }
      e.preventDefault(); //отменяю действие по умолчанию (открытие окна для сохранения файла)
    }
  }
}
