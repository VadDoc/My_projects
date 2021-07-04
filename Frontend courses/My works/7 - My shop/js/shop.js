window.addEventListener('load', init, false);

function init() {
  document.querySelector('.btnMain').addEventListener('click', openLinkMain, false);
  document.querySelector('.btnContact').addEventListener('click', openLinkContact, false);
  document.querySelector('.btnCart').addEventListener('click', openLinkCart, false);

  getNumberInCart();
  putInCart();
}

function openLinkMain() {
  open(location.href = './index.html', 'Main');
}

function openLinkContact() {
  open(location.href = './contact.html', 'Contact');
}

function openLinkCart() {
  open(location.href = './cart.html', 'Cart');
}

function getNumberInCart() {
  let boxCounter = document.getElementById('boxCounter');

  if (localStorage.length != 0) {
    boxCounter.innerHTML = localStorage.length;
  } else {
    boxCounter.innerHTML = '';
  }
}

function putInCart() {
  let buttons = document.querySelectorAll('.btnToCart'),
    products = document.querySelectorAll('.product'),
    target = document.getElementById("target");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      localStorage.setItem(Math.floor(Math.random() * 1000), products[i].outerHTML);
      boxCounter.innerHTML = localStorage.length;
    }, false)

    products[i].addEventListener('dragstart', function (event) {
      event.dataTransfer.setData("Text", this.outerHTML);
      target.style.backgroundColor = "green";
      target.style.border = '3px solid red';
      target.style.boxShadow = '3px 3px 30px 10px red' ;
      }, false);

      products[i].addEventListener('dragend', function (event) {
        event.dataTransfer.setData("Text", this.outerHTML);
        target.style.backgroundColor = "rgb(31, 31, 31)";
        target.style.border = '3px solid rgb(48, 137, 229)';
        target.style.boxShadow = '3px 3px 10px 0px rgb(48, 137, 229)' ;
        }, false);
  }

  target.addEventListener("dragenter", function (event) {
    this.style.backgroundColor = "green";
    this.style.border = '3px solid red';
    this.style.boxShadow = '3px 3px 30px 10px red' ;
}, false);

target.addEventListener("dragleave", function (event) {
  this.style.backgroundColor = "rgb(31, 31, 31)";
  this.style.border = '3px solid rgb(48, 137, 229)';
  this.style.boxShadow = '3px 3px 10px 0px rgb(48, 137, 229)' ;
}, false);

  target.addEventListener("dragover", function (event) {
    if (event.preventDefault) event.preventDefault();
    return false;
  }, false);

  target.addEventListener("drop", function (event) {
    if (event.preventDefault) event.preventDefault();
    if (event.stopPropagation) event.stopPropagation();

    this.style.backgroundColor = "rgb(31, 31, 31)";
    this.style.border = '3px solid rgb(48, 137, 229)';
    this.style.boxShadow = '3px 3px 10px 0px rgb(48, 137, 229)';

    let productToCart = event.dataTransfer.getData("Text");
    localStorage.setItem(Math.floor(Math.random() * 1000), productToCart);
    boxCounter.innerHTML = localStorage.length;
  }, false);
}