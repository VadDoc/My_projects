// Прописал следующую логику: 
// 1. Места в зале можно выбрать и отменить выбор повторным кликом в любом количестве
// 2. При выборе места или любого продукта появляется общая суммв заказа, при заказе = 0 запись исчезает.
// 3. Отправить заказ можно только, если заказано место в зале, иначе предупреждение и запрет отправки.
// 4. После отправки - сообщение об ее успешности.

// Знаю, что для уменьшения HTML и CSS кода можно было прописать зрительный зал через js и SASS, но решил не заморачиваться, т.к. боялся ошибиться из-за сложности структуры зрительного зала 

window.addEventListener('load', init, false);

let orderedSeats,
  countFoods = 0;

function init() {
  let btnMovie = document.querySelector('#movie-btn'),
    seats = document.querySelectorAll('.seats'),
    foods = document.querySelectorAll('.foods'),
    btnOrder = document.querySelector('.order-left-btn');

  btnMovie.addEventListener('click', showOrder, false);

  for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener('click', chooseSeats, false);
  }

  for (let i = 0; i < foods.length; i++) {
    foods[i].addEventListener('change', chooseFoods, false);
  }

  btnOrder.addEventListener('click', sendOrder, false);
}

function sendOrder(e) {
  let info = document.querySelector('.info');
  orderedSeats = document.querySelectorAll('.choose-seats');
  if (orderedSeats.length == 0) {
    info.innerHTML = 'Сначала выберите место в зрительном зале'
    e.preventDefault();
  } else {
    alert('Ваш заказ отправлен, ждите SMS');
  }
}

function chooseFoods() {
  if (this.checked) {
    countFoods += +this.dataset.prise
  } else {
    countFoods -= +this.dataset.prise
  }

  formInvoice();
}

function formInvoice() {
  let count = 0,
    countSeats = 0,
    invoice = document.querySelector('.invoice');
  orderedSeats = document.querySelectorAll('.choose-seats');

  for (let i = 0; i < orderedSeats.length; i++) {
    countSeats += +orderedSeats[i].dataset.prise;
  }

  count = countSeats + countFoods;

  if (count > 0) {
    invoice.innerHTML = `${count} грн`;
  } else {
    invoice.innerHTML = ``;
  }
}

function chooseSeats() {
  this.className += ' choose-seats';
  this.removeEventListener('click', chooseSeats, false);
  this.addEventListener('click', removeChooseSeats, false);

  formInvoice();
}

function removeChooseSeats() {
  this.classList.remove('choose-seats');
  this.removeEventListener('click', removeChooseSeats, false);
  this.addEventListener('click', chooseSeats, false);

  formInvoice();
}

function showOrder() {
  let order = document.querySelector('.order');
  order.style.display = 'grid';
}