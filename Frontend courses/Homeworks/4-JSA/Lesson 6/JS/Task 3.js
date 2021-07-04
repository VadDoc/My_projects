// Задание 3. Сделайте кнопку с надписью «получить скидку». 
// При наведение кнопка должна «убегать» от курсора не давая пользователю нажать себя.

window.addEventListener("load", init, false);

function init() {
  let div = document.getElementById("div");
  div.addEventListener("mouseover", function (e) {
    run(this, e);
  })
}

function run(divToRun, event) {
  let mouseX = event.clientX,
    mouseY = event.clientY,
    divX = divToRun.offsetLeft,
    divY = divToRun.offsetTop,
    deltaX = mouseX - divX,
    deltaY = mouseY - divY;

  document.addEventListener("mouseover", moveHandler, true);

  function moveHandler(e) {
    if (deltaX < 10) {
      divToRun.style.left = (e.clientX + 10) + "px";
    }

    if (deltaY < 10) {
      divToRun.style.top = (e.clientY + 10) + "px";
    }

    if (deltaX > 170 && deltaX < 180) {
      divToRun.style.left = (e.clientX - 180) + "px";
    }

    if (deltaY > 90 && deltaY < 100) {
      divToRun.style.top = (e.clientY - 100) + "px";
    }

    if (divX < 0 || divX > 1100) {
      divToRun.style.top = 280 + "px";
      divToRun.style.left = 600 + "px";
    }

    if (divY < 0 || divY > 650) {
      divToRun.style.top = 280 + "px";
      divToRun.style.left = 600 + "px";
    }
  }
}