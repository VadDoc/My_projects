window.addEventListener('load', getProductNamesJSON, false);

function getProductNamesJSON() {
  fetch("../server/php/data-product-names.json")
  .then(response => response.json())
  .then(data => createHeader(data))
  .catch(error => alert("Ошибка при загрузке"));
}

function createHeader(dataProdNames) {
  let headerProductsContainer = document.querySelector('.header-products-container');

  for (let i = 0; i < dataProdNames.length; i++) {
    headerProductsContainer.innerHTML += `<div class="header-product header-product-${i}">${dataProdNames[i]}</div>`;
  }

  let arrHeaderProduct = document.querySelectorAll('.header-product')
  //вешаю обработчики на кнопки продуктов
  for (let i = 0; i < arrHeaderProduct.length; i++) {
    arrHeaderProduct[i].addEventListener('click', function() {
      for (let i = 0; i < arrHeaderProduct.length; i++) {
        arrHeaderProduct[i].classList.remove('active')
      }
      getDataJSON(i);
      arrHeaderProduct[i].classList.add('active');
    })
  }
  for (let i = 0; i < arrHeaderProduct.length; i++) {
    if (arrHeaderProduct[i].innerHTML == 'Создать продукт') {
      arrHeaderProduct[i].style.display = 'none'
    }
  }
}

function getDataJSON(i) {
  fetch(`../server/php/data-${i}.json`)
  .then(response => response.json())
  .then(data => formArrDataPrice(data, i))
  .catch(error => alert("Ошибка при загрузке"));
}

function formArrDataPrice(data, i) {
  let arrValues = []; 
  //создаю массив данных со структуированными именами
  for (let i = 0; i < data.par.par0.values.length; i++) {
      for (let j = 0; j < data.par.par1.values.length; j++) {
          for (let k = 0; k < data.par.par2.values.length; k++) {
              for (let l = 0; l < data.par.par3.values.length; l++) {
                arrValues[`par${i}-par${j}-par${k}-par${l}`] = data.values.shift();
              }
          }
      }
  }
  formProduct (data, arrValues, i);
}

function formProduct (data, arrValues, i) {
  let titleProductContainer = document.querySelector('.title-product-container');
  let tableProductContainer = document.querySelector('.table-product-container');
  let resultPriceContainer = document.querySelector('.result-price-container')

  //вывожу имя продукта
  titleProductContainer.innerHTML = data.name;
  //прячу цену
  resultPriceContainer.style.display = 'none';
  //обнуляю контейнер
  tableProductContainer.innerHTML = `
     <div class="select-product"></div>
     <div class="img-product"></div>
  `;

  let selectProduct = document.querySelector('.select-product')
  let imgProduct = document.querySelector('.img-product')

  //строю select
  for (key1 in data.par) {
    createSelect(selectProduct, imgProduct, key1, data.par[key1].values, data.par[key1].name, i);
  }
  //вычисляю цену продукта
  getResultPrice(data, arrValues);
}

function createSelect(selectProduct, imgProduct, parNum, arrPars, parName, i) {
  selectProduct.innerHTML += `<select class="select select-${parNum}"></select>`;
  imgProduct.innerHTML = `<img src="../server/uploads/img-${i}.png" alt="">`
  //вывожу первый option
  let select = document.querySelector(`.select-${parNum}`);
  select.innerHTML += `<option disabled selected>${parName}</option>`;
  //вывожу остальные option
  for (let i = 0; i < arrPars.length; i++) {
    if (arrPars[i] == 'Стандарт') {
      select.innerHTML = `<option value="par${i}" selected>${arrPars[i]}</option>`;
      select.style.display = 'none';
    } else {
          select.innerHTML += `<option value="par${i}">${parName}: ${arrPars[i]}</option>`;
    }
  }
}

function getResultPrice(data, arrValues) {
  let resultPricContainer = document.querySelector('.result-price-container');
  let price = document.querySelector('.price');
  let arrSelect = document.querySelectorAll('select');

  for (let i = 0; i < arrSelect.length; i++) {
    arrSelect[i].addEventListener('change', function() {
      let par0Value = arrSelect[0].value;
      let par1Value = arrSelect[1].value;
      let par2Value = arrSelect[2].value;
      let par3Value = arrSelect[3].value;

      if (arrSelect[0].value != data.par.par0.name && arrSelect[1].value != data.par.par1.name && arrSelect[2].value != data.par.par2.name && arrSelect[3].value != data.par.par3.name) {
        resultPricContainer.style.display = 'block';
        price.innerHTML = arrValues[`${par0Value}-${par1Value}-${par2Value}-${par3Value}`];
      }
    })
  }
}
