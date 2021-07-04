// Задание 2
// Создайте страницу, которую пользователь сможет персонализировать. 
// На странице должен находиться выпадающий  список  с  названиями  цветов  и  поле  ввода,  
// в  которое  можно  будет  ввести  только целочисленное значение. 
// При нажатии на кнопку сохранить, цвет выбранный в выпадающем списке должен быть присвоен фону странице, 
// а целочисленное значение из поля ввода, должно использоваться для изменения размера шрифта на странице. 
// Выбранные настройки должны сохраниться в localStorage набор и при повторном заходе пользователя на страницу, 
// настройки должны восстановиться

window.addEventListener('load', init, false);

function init() {
  if (window.localStorage.pageColor) {
    document.body.style.backgroundColor = window.localStorage.pageColor;
  }
  // Проверяем, есть ли запись в localStorage , если есть, то присваеваем его значение
  // стилям браузера (берем пользовательские характеристики, сохраненные ранее)
  if (window.localStorage.parSize) {
    document.body.style.fontSize = window.localStorage.parSize;
    //   let parags = document.getElementsByTagName('p');
    // for (i = 0; i < parags.length; ++i) {
    //   parags[i].style.fontSize = parSize;

    // }
  }

  let bodyBgColor;
  let parFontSize;

  form1.text.onchange = changeFontSize;
  form1.select.onchange = changePageColour;
  form1.button.onclick = savePageSet;
}

function changeFontSize() {
  let pars = document.getElementsByTagName('p');

  for (i = 0; i < pars.length; ++i) {
    if (form1.text.value == 0) pars[i].style.fontSize = '15px';
    else if (form1.text.value == 1) pars[i].style.fontSize = '20px';
    else if (form1.text.value == 2) pars[i].style.fontSize = '25px';
    else if (form1.text.value == 3) pars[i].style.fontSize = '30px';
    else if (form1.text.value == 4) pars[i].style.fontSize = '35px';
    else if (form1.text.value == 5) pars[i].style.fontSize = '40px';
  }
  parFontSize = pars[0].style.fontSize;

  let pattern = /\b[0-5]{1}\b/;
  validate(this, pattern)
}

function validate(elem, pattern) {
  let res = elem.value.search(pattern);
  if (res == -1) elem.className = "invalid";
  else elem.className = "valid";
}

function changePageColour() {
  let selects = document.getElementsByTagName('select');

  for (i = 0; i < selects.length; ++i) {
    // Этот блок прописан короче, чем в Task 1: без if (options[i].selected){}
    // Возможны оба варианта или есть разница?
    bodyBgColor = selects[i].value;
    document.body.style.backgroundColor = bodyBgColor;
  }
}

function savePageSet() {
  window.localStorage.setItem("parSize", parFontSize);
  window.localStorage.setItem("pageColor", bodyBgColor);

  // Вариант 2
  // window.localStorage.pageColor = bodyBgColor;
  // window.localStorage.parSize = parFontSize;
}