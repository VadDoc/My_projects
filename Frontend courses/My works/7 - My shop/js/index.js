window.addEventListener('load', init, false);

function init() {
  document.querySelector('.btnShop').addEventListener('click', openLinkShop, false);
  document.querySelector('.btnContact').addEventListener('click', openLinkContact, false);
  document.querySelector('.btnCart').addEventListener('click', openLinkCart, false);
  document.querySelector('.image-1').addEventListener('click', openLinkShop, false);

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
  open(location.href='./contact.html', 'Contact');
}

function openLinkCart() {
  open(location.href='./cart.html', 'Cart');
}