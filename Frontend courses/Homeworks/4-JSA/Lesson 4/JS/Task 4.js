window.onload = () => {
  let posLeft = 0;
  let posTop = 0;
  let intervalLeft;
  let intervalRight;
  let intervalTop;
  let intervalBottom;

  const divText = get('text');

  let mooveLeft = () => {
    posLeft--;
    divText.style.left = posLeft + 'px'
  }

  let mooveRight = () => {
    posLeft++;
    divText.style.left = posLeft + 'px'
  }

  let mooveTop = () => {
    posTop--;
    divText.style.top = posTop + 'px'
  }

  let mooveBottom = () => {
    posTop++;
    divText.style.top = posTop + 'px'
  }

  get('buttonLeft').onclick = () => {
    clearInterval(intervalRight);
    intervalRight = setInterval(mooveLeft, 50)
  }

  get('buttonRight').onclick = () => {
    clearInterval(intervalLeft);
    intervalRight = setInterval(mooveRight, 50)
  }

  get('buttonTop').onclick = () => {
    clearInterval(intervalBottom);
    intervalTop = setInterval(mooveTop, 50)
  }

  get('buttonBottom').onclick = () => {
    clearInterval(intervalTop);
    intervalBottom = setInterval(mooveBottom, 50)
  }

  get('buttonStop').onclick = () => {
    clearInterval(intervalTop);
    clearInterval(intervalBottom);
    clearInterval(intervalLeft);
    clearInterval(intervalRight);
  }
}

let get = function (id) {
  return document.getElementById(id);
}