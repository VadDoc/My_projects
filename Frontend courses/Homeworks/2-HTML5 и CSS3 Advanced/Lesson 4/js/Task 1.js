// Задание 
// Создайте сайт, где будет возможность производить расчет данных из калькулятора.
// Добавьте 2 поля ввода и 4 кнопки для математических операций. После нажатия на каждую из кнопок –
// должен создаваться свой Worker и при обращении к потоку – в нем будет производиться вычисления.
// Используйте 4 файла Worker.js с различным функционалом.

window.addEventListener('load', init, false);

function init() {
  let numA = document.getElementById('numA'),
    numB = document.getElementById('numB'),
    output1 = document.getElementById('output1'),
    output2 = document.getElementById('output2'),
    output3 = document.getElementById('output3'),
    output4 = document.getElementById('output4');


  if (window.Worker) {
    document.getElementById('btn1').addEventListener('click', startWorker1, false);
    document.getElementById('btn2').addEventListener('click', startWorker2, false);
    document.getElementById('btn3').addEventListener('click', startWorker3, false);
    document.getElementById('btn4').addEventListener('click', startWorker4, false);
  }
}

function startWorker1() {
  let worker1 = new Worker("./js/worker1.js");
  output1.innerHTML = 'Результат с задержкой 1 сек: ';
  worker1.postMessage([numA.value, numB.value]);
  worker1.addEventListener("message", function (event) {
    output1.innerHTML += event.data;
  }, true);
}

function startWorker2() {
  let worker2 = new Worker("./js/worker2.js");
  output2.innerHTML = 'Результат с задержкой 2 сек: ';
  worker2.postMessage([numA.value, numB.value]);
  worker2.addEventListener("message", function (event) {
    output2.innerHTML += event.data;
  }, true);
}

function startWorker3() {
  let worker3 = new Worker("./js/worker3.js");
  output3.innerHTML = 'Результат с задержкой 3 сек: ';
  worker3.postMessage([numA.value, numB.value]);
  worker3.addEventListener("message", function (event) {
    output3.innerHTML += event.data;
  }, true);
}

function startWorker4() {
  let worker4 = new Worker("./js/worker4.js");
  output4.innerHTML = 'Результат с задержкой 4 сек: ';
  worker4.postMessage([numA.value, numB.value]);
  worker4.addEventListener("message", function (event) {
    output4.innerHTML += event.data;
  }, true);
}