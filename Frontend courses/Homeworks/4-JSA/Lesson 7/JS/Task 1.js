// Задание 1
// Разработайте страницу заказа пиццы. 
// Требования к странице: 
// Можно заказать три вида пиццы –маленькая, большая, средняя.
// Можно самостоятельно выбрать ингредиенты к пицце –грибы, бекон, помидоры, сыр, оливки.
// На странице должна вводиться информация о покупателе (его телефон и адрес доставки).
// Подумайте, какие данные следуетпроверять на странице, реализуйте эту проверку.
// Также реализуйте подсчет стоимости пиццы, при выборе размеров и ингредиентов, 
// автоматическидолжна пересчитываться сумма заказа. 
// Цены на размер пиццы и отдельные ингредиенты выберите произвольно.

window.addEventListener('load', init, false);

function init() {
  formOrder.customerName.onchange = customerNameOnChange;
  formOrder.address.onchange = addressOnChange;
  formOrder.telephone.onchange = telephoneOnChange;
  formOrder.kindOfPizza.onchange = orderСost;
  formOrder.sizeOfPizza.onchange = orderСost;

  formOrder.onsubmit = onsubmitHandler;
}

function validate(elem, pattern) {
  let res = elem.value.search(pattern);
  if (res == -1) elem.className = "invalid"; // установка CSS класса 
  else elem.className = "valid";
}

function orderСost() {
  let kind = formOrder.kindOfPizza.value;
  let size = formOrder.sizeOfPizza.value;
  let result = document.getElementById('result');
  let message;

  if (kind == 'cheese') {
    if (size == 'small') message = 79;
    else if (size == 'middle') message = 119;
    else if (size == 'large') message = 159;
  } else if (kind == 'tomato') {
    if (size == 'small') message = 89;
    else if (size == 'middle') message = 135;
    else if (size == 'large') message = 179;
  } else if (kind == 'mashroom') {
    if (size == 'small') message = 99;
    else if (size == 'middle') message = 149;
    else if (size == 'large') message = 199;
  } else if (kind == 'becon') {
    if (size == 'small') message = 109;
    else if (size == 'middle') message = 155;
    else if (size == 'large') message = 219;
  } else if (kind == 'oliva') {
    if (size == 'small') message = 119;
    else if (size == 'middle') message = 179;
    else if (size == 'large') message = 239;
  }

  if (message != undefined) {
    result.innerHTML = `Стоимость Вашего заказа составляет: ${message} грн.`;
  }
}

function customerNameOnChange() {
  let pattern = /\w/;
  validate(this, pattern)
}

function addressOnChange() {
  let pattern = /\w/;
  validate(this, pattern)
}

function telephoneOnChange() {
  let pattern = /\(\d{3}\) \d{3}-\d{2}-\d{2}/;
  validate(this, pattern)
}

function onsubmitHandler() {
  let invalid = false;

  for (let i = 0; i < formOrder.elements.length; ++i) {
    let e = formOrder.elements[i];
    if (e.type == "text" && e.onchange) {
      e.onchange();
      if (e.className == "invalid") invalid = true;
    }
  }

  if (invalid) {
    alert("Допущены ошибки при заполнении формы.");
    return false;
  }
}