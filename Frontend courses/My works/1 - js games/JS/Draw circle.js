// ## Задание
// Нарисовать на странице круг используя параметры, которые введет пользователь.

// #### Технические требования:
// - При загрузке страницы - показать на ней кнопку с текстом "Нарисовать круг". 
// Данная кнопка должна являться единственным контентом в теле HTML документа, 
// весь остальной контент должен быть создан и добавлен на страницу с помощью Javascript.
// - При нажатии на кнопку "Нарисовать круг" показывать одно поле ввода - диаметр круга. 
// При нажатии на кнопку "Нарисовать" создать на странице 100 кругов (10*10) случайного цвета. 
// При клике на конкретный круг - этот круг должен исчезать, при этом пустое место заполняться, 
// то есть все остальные круги сдвигаются влево.
// - У вас может возникнуть желание поставить обработчик события на каждый круг для его исчезновения. 
// Это неэффективно, так делать не нужно. На всю страницу должен быть только один обработчик событий, 
// который будет это делать.

window.onload = () => {
  const userDiameter = prompt("Введите диаметр круга", "50");

  const buttonDrawCircle = document.getElementById('buttonDrawCircle');

  buttonDrawCircle.onclick = () => {
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < 10; i++) {
        let divCircle = document.createElement('div'); //создаем элементы
        divCircle.classList = 'circle';
        divCircle.style.width = `${userDiameter}px`;
        divCircle.style.height = `${userDiameter}px`;
        divCircle.style.backgroundColor = randomColor();
        divCircle.onclick = getCircleNone; //метод на клик
        document.body.append(divCircle);
      }
      let divClearBorth = document.createElement('div'); //создаем элемент для 
      divClearBorth.className = 'clear-both'; // перевода на другую строку
      document.body.append(divClearBorth);
    }
  }

  function getCircleNone() {
    this.className = 'circle-none';
  }

  function randomColor() {
    return `hsl(${Math.floor(Math.random() * (360 - 1 + 1)) + 1}, 100%, 50%)`;
  }
}