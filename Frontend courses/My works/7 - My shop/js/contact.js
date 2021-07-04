window.addEventListener('load', init, false);

function init() {
  document.querySelector('.btnShop').addEventListener('click', openLinkShop, false);
  document.querySelector('.btnMain').addEventListener('click', openLinkContact, false);
  document.querySelector('.btnCart').addEventListener('click', openLinkCart, false);

  let boxCounter = document.getElementById('boxCounter');

  if (localStorage.length != 0) {
    boxCounter.innerHTML = localStorage.length;
  } else {
    boxCounter.innerHTML = '';
  }
}

function openLinkShop() {
  open(location.href='./shop.html', 'Shop');
}

function openLinkContact() {
  open(location.href='./index.html', 'Main');
}

function openLinkCart() {
  open(location.href='./cart.html', 'Cart');
}