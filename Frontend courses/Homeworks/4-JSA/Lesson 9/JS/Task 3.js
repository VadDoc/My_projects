// Задание 3
// Используя элемент canvas, напишите модуль, с помощью которого на странице
// будет отображаться диаграмма в соответствии с данными переданными массивом в модуль

function createDiagram(data) {
  let canvas = "diagramBox",
    width = 700,
    height = 400,
    color = 'blue';

  if (typeof canvas == "string") canvas = document.getElementById(canvas);
  canvas.width = width;
  canvas.height = height;
  let context = canvas.getContext("2d");

  // находим максимальное значение в массиве данных
  let maxData = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < data.length; i++) {
    if (maxData < data[i]) maxData = data[i];
  }

  let ratio = height / maxData;
  let barWidth = Math.floor(width / data.length);

  // создаем отдельный элемент диаграммы
  for (let i = 0; i < data.length; i++) {

    let barHeight = data[i] * ratio,
      x = barWidth * i,
      y = height - barHeight;

    context.fillStyle = color;
    context.fillRect(x, y, barWidth - 2, barHeight);
  }
}