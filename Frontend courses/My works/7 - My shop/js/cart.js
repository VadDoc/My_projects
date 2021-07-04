// Добрый день! Сделал добавление товара в cart двумя способами (кнопкой и перетаскиванием), из cart товар можно удалить с помощью кнопки, подсчитывается сумма товара, надпись в пустом cart.  У меня не получалось вывести правильную сумму оставшегося товара после удаления его из корзины. При перезагрузке страницы выводилась корректная сумма. Проблему решил принудительной перезагрузкой страницы: window.location.reload(). Уверен, что есть более изящный вариант, но у меня не хватило знаний и терпения))))

window.addEventListener('load', init, false);

function init() {
  document.querySelector('.btnShop').addEventListener('click', openLinkShop, false);
  document.querySelector('.btnContact').addEventListener('click', openLinkContact, false);
  document.querySelector('.btnMain').addEventListener('click', openLinkMain, false);

  let empthyCartText = document.getElementById('empthyCartText'), //Запись об отсутствии товаров в корзине
    main = document.querySelector('main');

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i),
      value = localStorage.getItem(key);

    if ((Date.parse(value.data) > (new Date(Date.now) - 86400000))) {
      localStorage.removeItem(key); //Удаляю старые localStorage
    }

    empthyCartText.style.display = 'none'; // Добавляю товары из localStorage на страницу
    main.innerHTML = main.innerHTML + localStorage.getItem(key);
  }

  let products = document.querySelectorAll('.product'),
    summDiv = document.getElementById('summDiv'),
    summ = 0;

  for (let i = 0; i < products.length; i++) { //Высчитываю общую сумму товаров в корзине
    summ = summ + +products[i].dataset.price;
  }

  if (localStorage.length > 0) { //Вывожу общую сумму товаров в корзине
    summDiv.innerHTML = `Your order: $${summ}`;
  }

  let buttons = document.querySelectorAll('.btnToCart');

  for (let i = 0; i < buttons.length; i++) { //Меняю кнопку добавления товара в корзину на его удаление
    buttons[i].innerHTML = 'Remove from the cart';
    buttons[i].addEventListener('click', function () { //Обработчик для удаление товара
      products[i].outerHTML = ''; //удаляю товар со страницы
      let key = localStorage.key(i);
      localStorage.removeItem(key); //удаляю товар из localStorage
      window.location.reload();
    })
  }
}

function openLinkShop() {
  open(location.href = './shop.html', 'Shop');
}

function openLinkContact() {
  open(location.href = './contact.html', 'Contact');
}

function openLinkMain() {
  open(location.href = './index.html', 'Main');
}