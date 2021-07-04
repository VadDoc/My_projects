// Я что-то замучился с этим кодом, нужна Ваша помощь)))
// Без цикла do while скрипт работает, только после каждой неугаданной попытки,
// генерирует новое случайное число (что логично). Следовательно необходим цикл, чтобы, пока
// число не угадано, цикл продолжался. Прописываю цикл do while (он закомментирован) и....
// Страница вообще не занружается. Видимо, где-то допущена логическая ошибка, но я не могу
// ее найти.

// Еще вопрос:
// Хотел использовать для проверки на number код:
//  if(userNumber === NaN) {
//   console.log('no number')
//  } else {
//   console.log('number')
//  }
// Но он почему-то не работал. Пришлось использовать более громоздкий:
// if (userNumber > Number.NEGATIVE_INFINITY && userNumber < Number.POSITIVE_INFINITY)

// Тренер: для проверки NaN можете использовать метод isNaN:  Number.isNaN(userNumber)
// Да для цикла нужно изменить условие, что пока пользователь вводит число, то мы выполняем цикл. 
// Но вообще лучше добавить обработчик события при нажатии на кнопку.


window.onload = () => {
  let arrNumber = new Array();
  for (i = 1; i < 101; i++) {
    arrNumber = arrNumber.concat(i);
  }
  console.log(arrNumber);
  let findNumber = Math.floor(Math.random() * (arrNumber.length));
  console.log(findNumber);


  let strSearch = location.search.substring(1);
  let substrs = strSearch.split("=");
  let userNumber = +substrs[substrs.length - 1];

  const result = document.getElementById('result');
  let message;

  // do {
  if (userNumber > Number.NEGATIVE_INFINITY && userNumber < Number.POSITIVE_INFINITY) {
    if (userNumber == 0) { // Можно использовать для проверки на число Number.isNaN(userNumber)
      message = 'Введите число от 1 до 100';
    } else if (userNumber > 100 || userNumber < 1) {
      message = 'Вы ввели число не в диапазоне 1-100. Повторите попытку';
    } else {
      if (userNumber > findNumber) {
        message = `"${userNumber}" больше искомого. Повторите попытку`;
      } else if (userNumber < findNumber) {
        message = `"${userNumber}" меньше искомого. Повторите попытку`;
      } else {
        message = `Поздравляю! Вы угадали, искомое число: "${userNumber}"`;
      }
    }
  } else {
    message = 'Вы ввели не число. Повторите попытку';
  }
  // } while (userNumber != findNumber);

  result.innerHTML = `${message}`;
}

