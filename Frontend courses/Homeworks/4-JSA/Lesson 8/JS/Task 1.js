// Задание 1
// Создайте страницу, которую пользователь сможет персонализировать. 
// На странице должен находиться выпадающий  список  с  названиями  цветов  и  поле  ввода,  
// в  которое  можно  будет  ввести  только целочисленное значение. 
// При нажатии на кнопку сохранить, цвет выбранный в выпадающем списке должен быть присвоен фону странице, 
// а целочисленное значение из поля ввода, должно использоваться для изменения размера шрифта на странице. 
// Выбранные настройки должны сохраниться в cookieнабор и при повторном заходе пользователя на страницу, 
// настройки должны восстановиться

window.addEventListener('load', init, false);

function init() {
  let savedPageColor = findCookieValue("page-color");
  if (savedPageColor) {
    document.body.style.backgroundColor = savedPageColor;
  }

  let savedFontSize = findCookieValue("font-size");
  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize;
  }

  let pageColor;
  let parFontSize;

  form1.text.onchange = changeFontSize;
  form1.select.onchange = changePageColour;
  form1.button.onclick = savePageSet;
}

function savePageSet() {
  document.cookie = "page-color=" + encodeURIComponent(pageColor) + ";max-age=" + (60 * 60 * 24);
  document.cookie = "font-size=" + encodeURIComponent(parFontSize) + ";max-age=" + (60 * 60 * 24);
}

function changeFontSize() {
  let pars = document.getElementsByTagName('p');
  let numFontSize = form1.text.value;

  for (par of pars) {
    if (numFontSize == 0) par.style.fontSize = '15px';
    else if (numFontSize == 1) par.style.fontSize = '20px';
    else if (numFontSize == 2) par.style.fontSize = '25px';
    else if (numFontSize == 3) par.style.fontSize = '30px';
    else if (numFontSize == 4) par.style.fontSize = '35px';
    else if (numFontSize == 5) par.style.fontSize = '40px';

    parFontSize = par.style.fontSize;

    let pattern = /\b[0-5]{1}\b/;
    validate(this, pattern);
  }
}

function changePageColour() {
  let options = document.getElementsByTagName('option');

  for (i = 0; i < options.length; ++i) {
    if (options[i].selected) {
      pageColor = options[i].value;
      document.body.style.backgroundColor = pageColor;
    }
  }
}

function validate(elem, pattern) {
  let res = elem.value.search(pattern);
  if (res == -1) elem.className = "invalid";
  else elem.className = "valid";
}

function findCookieValue(cookieName) {
  let allcookies = document.cookie;
  let pos = allcookies.indexOf(cookieName + "=");

  if (pos != -1) {
    let start = pos + cookieName.length + 1;
    let end = allcookies.indexOf(";", start);

    if (end == -1) end = allcookies.length;

    let value = allcookies.substring(start, end);
    value = decodeURIComponent(value);
    return value;
  }
}