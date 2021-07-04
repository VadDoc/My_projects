window.onload = function () {
  let number1;
  let number2;
  let result;
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  // Думал, как уменьшить код и вынести повторяющийся блок из каждого обработчика. 
  // Решил повесить дополнительный общий обработчик на все кнопки, вынес в него сколько смог кода,
  // в том числе и часть if ... else. Теперь у каждой копки 2 обработчика: один общий и один собственный.
  // Все работает, но насколько это правильно разбивать условный оператор на два обработчика?
  document.getElementById('buttons').addEventListener('click',
    function () {
      number1 = document.getElementById('number1').value;
      number2 = document.getElementById('number2').value;

      if (number1 == 0) number1 = 0; //чтобы пустое поле отображалось, как "0", а не пустота
      if (number2 == 0) number2 = 0;

      if (Number.isInteger(+number1) && Number.isInteger(+number2)) { //Проверка на целое число
        img2.style.display = 'block';
        img1.style.display = 'none';
      } else {
        img1.style.display = 'block';
        img2.style.display = 'none';
        document.getElementById('divResult').innerHTML = `Извините, но я туповат и умею обращаться только с целыми числами`;
      }
    }, true) // Очень пригодился перехват - capture: true, на false - работает не корректно

  document.getElementById('btnAdd').addEventListener('click',
    function () {
      if (Number.isInteger(+number1) && Number.isInteger(+number2)) {
        result = +number1 + +number2;
        document.getElementById('divResult').innerHTML = `Получи результат:<br>${number1} + ${number2} = ${result}`;
      }
    }, false)

  document.getElementById('btnSub').addEventListener('click',
    function () {
      if (Number.isInteger(+number1) && Number.isInteger(+number2)) {
        result = +number1 - +number2;
        document.getElementById('divResult').innerHTML = `Получи результат:<br>${number1} - ${number2} = ${result}`;
      }
    }, false)

  document.getElementById('btnMul').addEventListener('click',
    function () {
      if (Number.isInteger(+number1) && Number.isInteger(+number2)) {
        result = +number1 * +number2;
        document.getElementById('divResult').innerHTML = `Получи результат:<br>${number1} * ${number2} = ${result}`;
      }
    }, false)

  document.getElementById('btnDiv').addEventListener('click',
    function () {
      if (Number.isInteger(+number1) && Number.isInteger(+number2)) {
        result = +number1 / +number2;
        document.getElementById('divResult').innerHTML = `Получи результат:<br>${number1} / ${number2} = ${result}`;
      }
    }, false)
}