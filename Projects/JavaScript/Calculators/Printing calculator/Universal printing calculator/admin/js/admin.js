window.addEventListener('load', getProductNamesJSON, false)

function getProductNamesJSON() {
    fetch("../server/php/data-product-names.json")
    .then(response => response.json())
    .then(data => {
        getStartPage(data)
    })
    .catch(error => {
        let n = 5; //Устанавливаю количество продуктов
        let data = [];
    
        for (let i = 0; i < n; i++) {
            // data.push(`Продукт ${i + 1}`)
            data.push('Создать продукт')
        }
        getStartPage(data);
    });
}

function getStartPage(dataProdNames) {
    let changeProductBtn = document.querySelector('.change-product-btn');
    let newProductBtn = document.querySelector('.new-product-btn');
    let imgProductBtn = document.querySelector('.img-product-btn');
    let firstContainer = document.querySelector('.first-container');
    let flagImg = false;

    newProductBtn.addEventListener('click', function() {
        firstContainer.style.display = 'none';
        chooseParams(dataProdNames);
    }, false)

    changeProductBtn.addEventListener('click', function() {
        firstContainer.style.display = 'none';
        createHeaderHTML(dataProdNames);
        setHandlerHeader(dataProdNames, flagImg);
    }, false)

    imgProductBtn.addEventListener('click', function() {
        firstContainer.style.display = 'none';
        flagImg = true;
        createHeaderHTML(dataProdNames);
        setHandlerHeader(dataProdNames, flagImg);
    }, false)
}

function chooseParams(dataProdNames) {
    let divHeaderProductsContainer = document.querySelector('.header-products-container');
    let divProductsContainer = document.querySelector('.products-container');

    divProductsContainer.innerHTML = '';
    divHeaderProductsContainer.style.display = 'none';

    //строю header и поля с параметрами
    createHeaderHTML(dataProdNames);
    createProductsHTML(divProductsContainer, dataProdNames);

    let arrChooseProductContainer = document.querySelectorAll('.choose-product-container');
    let arrProductContainer = document.querySelectorAll('.product-container');

    divProductsContainer.style.display = 'block';
    //вешаю обработчики на кнопки продуктов
    for (let i = 0; i < arrChooseProductContainer.length; i++) {
        arrChooseProductContainer[i].addEventListener('click', function () {
            for (let i = 0; i < arrProductContainer.length; i++) {
                arrProductContainer[i].style.display = 'none';
                arrChooseProductContainer[i].classList.remove('active');
            }
            arrProductContainer[i].style.display = 'block';
            arrChooseProductContainer[i].classList.add('active');

            formProduct(i, dataProdNames);
        }, false)
    }
}

function formProduct(i, dataProdNames){
    let prodNum = i;
    let btnSetPrices = document.querySelector(`#set-priсes${i}-btn`);
    let dataProd = {}; //объект с информацией о продукте
    let inpPrName = document.querySelector(`.input-pr${i}-name`);
    let arrCheckboxPr = document.querySelectorAll(`.checkbox-pr${i}`);
    let arrSpanNamePr = document.querySelectorAll(`.span-name-pr${i}`);
    let arrInputNamePr = document.querySelectorAll(`.input-name-pr${i}`);
    let chooseProductContainer = document.querySelector(`.choose-product-container-${i}`);
    //переименовываю имя продукта шапки
    inpPrName.addEventListener('change', function() {
        chooseProductContainer.innerHTML = inpPrName.value;
    })
    //активирую параметры
    for (let i = 0; i < arrCheckboxPr.length; i++) {
        arrCheckboxPr[i].addEventListener('click', function() {
            activeParams(arrCheckboxPr, i, prodNum); 
        })
    }
    //меняю имя параметров
    for (let i = 0; i < arrInputNamePr.length; i++) {
        arrInputNamePr[i].addEventListener('change', function () {
            changeName (arrSpanNamePr, arrInputNamePr, i);
        });
    }
    //вешаю обработчик на кнопку
    btnSetPrices.addEventListener('click', function() {
        setDataProduct(dataProd, prodNum, inpPrName, arrSpanNamePr, arrCheckboxPr, dataProdNames);
    })
}

function setDataProduct (dataProd, prodNum, prodName, arrSpanNamePr, arrCheckbox, dataProdNames) {
    //заполняю объект данных
    dataProd.numberProduct = prodNum;
    dataProd.name = prodName.value;
    dataProd.par = {};
    dataProd.values = [];
    //обрабатываю поля с параметрами
    for (let i = 0; i < arrCheckbox.length; i++) {
        dataProd.par[`par${i}`] = {}
        dataProd.par[`par${i}`].name = arrSpanNamePr[i].innerHTML;
        dataProd.par[`par${i}`].values = [];//создаю массив для параметров в dataProd

        if(arrCheckbox[i].checked) { //если чекбокс выбран
            let arrElem = document.querySelectorAll(`.input-pr${prodNum}-par${i}-value`);
            //заполняю массив параметрами
            for (let j = 0; j < arrElem.length; j++) {
                if (arrElem[j].value) {
                    dataProd.par[`par${i}`].values.push(arrElem[j].value);
                }
            }
        } else {//если чекбокс не выбран
            dataProd.par[`par${i}`].values[0] = 'Стандарт';
        }
    }
    // sendProductNamesJSON(dataProdNames)
    createPriceTables(dataProd, dataProdNames)
}

function createPriceTables(dataProd, dataProdNames) {
    let divProductsContainer = document.querySelector('.products-container');
    let divPTablesContainer = document.querySelector('.tables-container');

    divPTablesContainer.innerHTML = '';

    divProductsContainer.style.display = 'none';
    //массивы с наименованием параметров
    let arrPar0 =  dataProd.par.par0.values;
    let arrPar1 =  dataProd.par.par1.values;
    let arrPar2 =  dataProd.par.par2.values;
    let arrPar3 =  dataProd.par.par3.values;
    // сoздаю массив имен для первого столбца таблиц
    let arrFirstTD = [dataProd.par.par2.name];
    arrFirstTD = arrFirstTD.concat(arrPar2);
    // сoздаю массив имен для первого столбца таблиц
    let arrFirstTR = [dataProd.par.par2.name];
    arrFirstTR = arrFirstTR.concat(arrPar3);

    for (let i = 0; i < arrPar0.length; i++) {
        for (let j = 0; j < arrPar1.length; j++) {
            //вывожу первый параметр заголовка, таблицу
            divPTablesContainer.innerHTML += `<div class="product-title product-title-${i} product-title-${i}-${j}">${dataProd.par.par0.name}: ${arrPar0[i]} - </div>`; 
            divPTablesContainer.innerHTML += `<table class="table"><tbody class="tbody tbody-${i} tbody-${i}-${j}"></tbody></table>`;
            //вывожу второй параметр заголовка
            let elem = document.querySelector(`.product-title-${i}-${j}`);
            elem.innerHTML += `${dataProd.par.par1.name}: ${arrPar1[j]}`;
            //прописываю tr
            for (let k = 0; k < arrPar2.length+1; k++) {
                let tbody = document.querySelector(`.tbody-${i}-${j}`);
                tbody.innerHTML += `<tr class="tr tr-${i} tr-${i}-${j} tr-${i}-${j}-${k}"></tr>`;
                //прописываю td
                for (let l = 0; l < arrPar3.length+1; l++) {
                    let tr = document.querySelector(`.tr-${i}-${j}-${k}`);
                    tr.innerHTML += `<td class="td td-${i} td-${i}-${j} td-${i}-${j}-${k-1} td-${i}-${j}-${k-1}-${l-1}"><input type="text" value="0" class="inp-td inp-td-${i}-${j}-${k-1}-${l-1}"></td>`;
                    let firstTR = document.querySelector(`.td-${i}-${j}--1-${l-1}`);
                    firstTR.innerHTML = arrFirstTR[l]; //заполняю шапку
                }
                let firstTD = document.querySelector(`.td-${i}-${j}-${k-1}`);
                firstTD.innerHTML = arrFirstTD[k]; //заполняю первую колонку
            }
        }
    }
    preparePricesForSave(dataProd, divPTablesContainer, dataProdNames);
}

function preparePricesForSave(dataProd, divPTablesContainer, dataProdNames) {
    // Создаю кнопки
    divPTablesContainer.innerHTML += `<button class="save-table-btn btn" id="save-table-btn">Сохранить</button>`;
    divPTablesContainer.innerHTML += `<button class="restart-btn btn" id="restart-btn">Отменить</button>`;

    let saveTableBtn = document.querySelector('.save-table-btn');
    let restartBtn = document.querySelector('.restart-btn');
    let arrInpTD = document.querySelectorAll('.inp-td');
    //Вывожу данные из сервера в таблицах
    if (dataProd.values.length > 0) {
        for (let i = 0; i < arrInpTD.length; i++) {
            arrInpTD[i].value = dataProd.values[i];
        }
     }
    //Обработчик Рестарта
    restartBtn.addEventListener('click', function () { 
        let result = confirm('После сохранения новых настроек, вы потеряете все предыдущие! Вы хотите перейти к созданию нового продукта?');
        if (result == true) { //стираю таблицы
            divPTablesContainer.innerHTML = '';
            chooseParams(dataProdNames);
        }
    })
    //Обработчик Сохранения данных
    saveTableBtn.addEventListener('click', function(){
        dataProd.values = [];
        //Создаю массив данных инпутов таблиц
        for (let i = 0; i < arrInpTD.length; i++) {
            dataProd.values.push(arrInpTD[i].value)
        }
        sendProductNamesJSON()
        sendDataJSON(dataProd);//отправляю данные на сервер
    }, false)
}

function sendDataJSON(dataProd) {
    fetch(`../server/php/json-${dataProd.numberProduct}.php`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataProd),
    })
    .then(response => response.json())
    .then(data => {
      alert('Ваши данные сохранены на сервере')
      document.querySelector('.tables-container').style.display = 'none';
      window.location.reload();
      console.log('Success:', data);
    })
    .catch((error) => {
      alert('Произошла ошибка!Ваши данныe')
      console.log('Error:', error);
    });
}

function setHandlerHeader(dataProdNames, flagImg) {
    let arrChooseProductContainer = document.querySelectorAll('.choose-product-container');

    for (let i = 0; i < arrChooseProductContainer.length; i++) {
        arrChooseProductContainer[i].addEventListener('click', function () {
            for (let i = 0; i < arrChooseProductContainer.length; i++) {
                arrChooseProductContainer[i].classList.remove('active');
            }
            getDataJSON(dataProdNames, flagImg, i); //Загружаю данные выбранного продукта
            arrChooseProductContainer[i].classList.add('active');
        }, false)
    }
}

function getDataJSON(dataProdNames, flagImg, i) {
    fetch(`../server/php/data-${i}.json`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.first-container').innerHTML = '';
        document.querySelector('.header-products-container').style.display = 'block';
        // createPriceTables(data, dataProdNames)
        if (flagImg) createProductImageHTML(dataProdNames, i)
        else createPriceTables(data, dataProdNames)
    })
    .catch(error => alert("Данный продукт еще не создан"));
}

function sendProductNamesJSON() {
    let arrChooseProductContainer = document.querySelectorAll('.choose-product-container');
    let dataProdNames =[]; //создаю массив имен продуктов
    //заполняю массив имен
    for (let i = 0; i < arrChooseProductContainer.length; i++) {
        dataProdNames.push(arrChooseProductContainer[i].innerHTML)
    }
    //отправляю массив на сервер
    let xhr = new XMLHttpRequest();
    let url = `../server/php/product-names-json.php`;

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         alert('Ваши данные сохранены на сервере')
    //     }
    // };
    let dataJSON = JSON.stringify(dataProdNames);
    xhr.send(dataJSON);
}

function createHeaderHTML(dataProdNames) {
    let divHeaderProductsContainer = document.querySelector('.header-products-container');

    divHeaderProductsContainer.innerHTML = '';
    divHeaderProductsContainer.style.display = 'block';
    //создаю шапку
    for (let i = 0; i < dataProdNames.length; i++) {
        divHeaderProductsContainer.innerHTML += `<div class="choose-product-container choose-product-container-${i}">${dataProdNames[i]}</div>`;
    }
}

function createProductsHTML(divProductsContainer, dataProdNames) {
    //Пока написано так, чтобы не заморачиваться. Количество подпараметров ограниченою В перспективе пользователь сможет добавить
    //любое количество количество подпараметров/
    for (let i = 0; i < dataProdNames.length; i++) {
        divProductsContainer.innerHTML += `
        <div class="product-container product-container-${i}">
            <div class="param">
                <input type="text" class="input input-pr${i} input-pr${i}-name" name="" placeholder="Введите имя продукта">
            </div>
            <div class="param param-0">
                <div class="par-name-container"><span class="span-name span-name-pr${i}">Формат печати</span><input type="checkbox" class="checkbox checkbox-pr${i}"></div>
                <input class="input input-pr${i} input-pr${i}-par0 input-pr${i}-par0-name input-name-pr${i}" type="text" name="" min="0" value="Формат печати" disabled>
                <input class="input input-pr${i} input-pr${i}-par0 input-pr${i}-par0-value" type="text" name="" min="0" value="A4" disabled>
                <input class="input input-pr${i} input-pr${i}-par0 input-pr${i}-par0-value" type="text" name="" min="0" value="A5" disabled>
                <input class="input input-pr${i} input-pr${i}-par0 input-pr${i}-par0-value" type="text" name="" min="0" value="A6" disabled>
            </div>
            <div class="param param-1">
                <div class="par-name-container"><span class="span-name span-name-pr${i}">Сторон печати</span><input type="checkbox" class="checkbox checkbox-pr${i}"></div>
                <input class="input input-pr${i} input-pr${i}-par1 input-pr${i}-par1-name input-name-pr${i}" type="text" name="" min="0" value="Сторон печати" disabled>
                <input class="input input-pr${i} input-pr${i}-par1 input-pr${i}-par1-value" type="text" name="" min="0" value="Односторонняя" disabled>
                <input class="input input-pr${i} input-pr${i}-par1 input-pr${i}-par1-value" type="text" name="" min="0" value="Двухсторонняя" disabled>
            </div>
            <div class="param param-2">
                <div class="par-name-container"><span class="span-name span-name-pr${i}">Плотность бумаги</span><input type="checkbox" class="checkbox checkbox-pr${i}"></div>
                <input class="input input-pr${i} input-pr${i}-par2 input-pr${i}-par2-name input-name-pr${i}" type="text" name="" min="0" value="Плотность бумаги" disabled>
                <input class="input input-pr${i} input-pr${i}-par2 input-pr${i}-par2-value" type="number" name="" min="0" value="130" disabled>
                <input class="input input-pr${i} input-pr${i}-par2 input-pr${i}-par2-value" type="number" name="" min="0" value="170" disabled>
                <input class="input input-pr${i} input-pr${i}-par2 input-pr${i}-par2-value" type="number" name="" min="0" value="250" disabled>
            </div>
            <div class="param param-3">
                <div class="par-name-container"><span class="span-name span-name-pr${i}">Количество единиц</span><input type="checkbox" class="checkbox checkbox-pr${i}"></div>
                <input class="input input-pr${i} input-pr${i}-par3 input-pr${i}-par3-name input-name-pr${i}" type="text" name="" min="0" value="Количество единиц" disabled>
                <input class="input input-pr${i} input-pr${i}-par3 input-pr${i}-par3-value" type="number" name="" min="0" value="100" disabled>
                <input class="input input-pr${i} input-pr${i}-par3 input-pr${i}-par3-value" type="number" name="" min="0" value="200" disabled>
                <input class="input input-pr${i} input-pr${i}-par3 input-pr${i}-par3-value" type="number" name="" min="0" value="300" disabled>
                <input class="input input-pr${i} input-pr${i}-par3 input-pr${i}-par3-value" type="number" name="" min="0" value="500" disabled>
                <input class="input input-pr${i} input-pr${i}-par3 input-pr${i}-par3-value" type="number" name="" min="0" value="1000" disabled>
            </div>
            <div class="set-priсes-btn-container">
                <button class="btn set-priсes-btn" id="set-priсes${i}-btn">Установить цены</button>
            </div>
        </div>
        `
    }
}

function createProductImageHTML(dataProdNames, i) {
    let divProductsContainer = document.querySelector('.products-container');

    divProductsContainer.innerHTML = `
            <div class="product-image-container">
                <form name="upload" action="../server/php/upload-img-${i}.php" method="POST" ENCTYPE="multipart/form-data">
                    Выберите изображение для загрузки:<br>
                    <input type="file" name="userfile"><br>
                    <input type="submit" name="upload" value="Загрузить изображение">
                </form>
            </div>
    `;
}

function activeParams(arrCheckbox, i, prodNum) {
    let arrElem = document.querySelectorAll(`.input-pr${prodNum}-par${i}`); //массив названий параметра
    //обрабатываю активность параметров
    if(arrCheckbox[i].checked) {
        for (let j = 0; j < arrElem.length; j++) {
            arrElem[j].removeAttribute('disabled'); //активирую
        }
    } else {
        for (let j = 0; j < arrElem.length; j++) {
            arrElem[j].setAttribute('disabled', true) //дезактивирую
        }
    }
}

function changeName (arrSpan, arrInput, i) {
    arrSpan[i].innerHTML = arrInput[i].value
}






