// ## Задание

// Создать адаптированный аналог игры Whack a mole

// #### Технические требования:
// - Создать поле 10*10 с помощью элемента ```<table>```.
// - Суть игры: любая неподсвеченная ячейка в таблице на короткое время окрашивается в синий цвет. Пользователь должен в течение отведенного времени успеть кликнуть на закрашенную ячейку. Если пользователь успел это сделать, она окрашивается в зеленый цвет, пользователь получает 1 очко. Если не успел - она окрашивается в красный цвет, компьютер получает 1 очко.
// - Игра длится до тех пор, пока половина ячеек на поле не будут окрашены в зеленый или красный цвет. Как только это случится, тот игрок (человек или компьютер), чьих ячеек на поле больше, побеждает.
// - Игра должна иметь три уровня сложности, выбираемых перед стартом игры: 
//   - Легкий - новая ячейка подсвечивается каждые 1.5 секунды;
//   - Средний - новая ячейка подсвечивается раз в секунду;
//   - Тяжелый - новая ячейка подсвечивается каждые полсекунды.
// - По окончании игры вывести на экран сообщение о том, кто победил. 
// - После окончания игры должна быть возможность изменить уровень сложности и начать новую игру.
// - Обязательно использовать функционал ООП при написании приложения.
// - При желании, вместо окрашивания ячеек цветом, можно вставлять туда картинки.


// Игра"Whack a mole"

// Елена, буду очень благодарен за комментарии по поводу качества кода, 
// его синтаксиса, логики. Что можно было бы изменить для его улучшения?

window.onload = () => {
  const buttonEasy = document.getElementById('easy'), // Кнопки уровня сложности
    buttonMedium = document.getElementById('medium'),
    buttonHavy = document.getElementById('havy');

  let timerLevel = 1500; //Таймер уровня сложности по умолчанию (easy)
  // Устанавливаю параметры уровня сложности и дизайн кнопок 
  // уровней сложности при клике на каждую из них
  buttonEasy.onclick = () => {
    timerLevel = 1500;
    buttonEasy.className = 'button-on';
    buttonMedium.className = 'button';
    buttonHavy.className = 'button';
  }
  buttonMedium.onclick = () => {
    timerLevel = 1000;
    buttonEasy.className = 'button';
    buttonMedium.className = 'button-on';
    buttonHavy.className = 'button';
  }
  buttonHavy.onclick = () => {
    timerLevel = 700;
    buttonEasy.className = 'button';
    buttonMedium.className = 'button';
    buttonHavy.className = 'button-on';
  }
  // Запускаю игру кликом на кнопку Start
  document.getElementById('start').onclick = () => {
    let arrTd = document.getElementsByTagName('td'); //Возвращаю цвет ячеек после рестарта
    for (let i = 0; i < arrTd.length; i++) {
      arrTd[i].style.backgroundColor = 'rgb(218, 214, 214)';
    }

    let arrTdId = new Array(0); //Создаю пустой массив
    console.log(arrTdId)

    for (i = 1; i < 101; i++) {
      arrTdId = arrTdId.concat(`td${i}`); //Формирую массив из 'td1' - 'td100'
    }

    let countRed = 0; //Переменные счетчиков
    let countGreen = 0;

    let timer = setInterval(() => { // Таймер полного цикла
      if (countRed <= 50 && countGreen <= 50) {
        let random = Math.floor(Math.random() * arrTdId.length); //Выбираю случайную ячейку
        let arrLight = document.getElementById(`${arrTdId[random]}`);
        arrTdId.splice(random, 1); //Убирай из массива случайно выбранную ячейку
        arrLight.style.background = 'blue' // Если оба счетчика <= 50 - ячека - 'blue'

        table.onclick = function (event) {
          let targetTag = event.target;
          if (targetTag.tagName == 'TD') {
            if (targetTag.style.background == 'blue') {
              targetTag.style.background = 'green'; // Eсли успел за timer кликнуть синюю - зеленая
              countGreen++; //Увеличиваю зеленный счетчик на 1
            }
          }
        };
        setTimeout(() => { // Таймер возможности кликнуть на синюю
          if (arrLight.style.backgroundColor == 'blue') {
            arrLight.style.background = 'red' // Eсли не успел за timer кликнуть зеленую - красная
            countRed++; //Увеличиваю красный счетчик на 1
          }
        }, timerLevel);
      } else { // Если один из счетчиков > 50 
        clearInterval(timer); //Прерываю цикл
        const result = document.getElementById('header'); //Нахожу элемент для вывода сообщения
        if (countGreen > countRed) { // Сообщение для победителя
          result.className = 'win';
          result.innerHTML = `You're a winner!  Score: ${countGreen} - ${countRed}`;
          setTimeout(() => { // Возвращаю первоначальную запись через 3000 мс
            result.className = 'start'
            result.innerHTML = `Game "Whack a mole"`;
          }, 3000)
        } else { // Сообщение для проигравшего
          result.className = 'loose';
          result.innerHTML = `You're a looser!  Score: ${countGreen} - ${countRed}`;
          setTimeout(() => { // Возвращаю первоначальную запись через 3000 мс
            result.className = 'start'
            result.innerHTML = `Game "Whack a mole"`;
          }, 3000)
        }
      }
    }, timerLevel);
  }
}