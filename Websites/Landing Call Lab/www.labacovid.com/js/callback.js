window.addEventListener('load', getHandlerCallback, false);

function getHandlerCallback() {
    let mailForm = document.callbackForm;    
    let errorMess = document.querySelector('#error-mess-callback');
    let arrPatterns = [
        /\S{3,}/, //имя
        /\w/ //телефон
        // /\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}/, //телефон
    ];
    let arrMess = [ // в placeholder при ошибке
        'Необходимо больше двух букв',
        'Правильный формат +38 (000) 000-00-00'
    ];
    let arrPlaceholder = [ //восстанавливаем placeholder
        'Укажите имя',
        'Укажите номер телефона'
    ];
    let arrErrMess = [ //красным при отсутствии заполнения
        'Введите имя',
        'Введите номер телефона'
    ];
    //валидация по паттерну
    for (let i = 0; i < mailForm.length - 1; i++) { // 
        mailForm[i].addEventListener('change', function() {
            validateCallback(mailForm, arrPatterns, errorMess, arrMess, i);
        })
    }

    mailForm[2].addEventListener('click', function() {
        //валидации на наличия заполнения формы
        for (let i = 0; i < mailForm.length - 1; i++) { 
            if (mailForm[i].value == '') {
                errorMess.innerHTML = arrErrMess[i];
                return false;    
            }
        }
        // errorMess.innerHTML = '';
        let data = { //сохраняю, убираю лишние пробелы вначале и вконце
            'name': mailForm[0].value.trim(), 
            'tel': mailForm[1].value.trim(), 
        }   
        // console.log(data)
 
        sendDataJSONCallback(data, mailForm, arrPlaceholder, errorMess)
    })
}

function sendDataJSONCallback(data, mailForm, arrPlaceholder, errorMess) {
    //иннактивирую кнопку пока не пришло сообщение с сервера
    mailForm[2].setAttribute("disabled", true);

    let xhr = new XMLHttpRequest();
    let url = `./php/callback.php`;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    // xhr.setRequestHeader("Content-Type", "html");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            errorMess.innerHTML = xhr.responseText;
            //активирую кнопу
            mailForm[2].removeAttribute("disabled");
        } else if (xhr.status == 404) {
            alert("Были ошибки, сообщение не отправлено");
        }
    }
    //восстанавливаю первоначальный вид input
    for (let i = 0; i < mailForm.length; i++) {
        mailForm[i].value = '';
        mailForm[i].setAttribute('placeholder', arrPlaceholder[i])
        // mailForm[i].removeAttribute('placeholder');
        mailForm[i].classList.remove('invalid');
        mailForm[i].classList.remove('valid');
        errorMess.innerHTML = '';
    }
    console.log(data)

    let dataJSON = "data=" + JSON.stringify(data);
    xhr.send(dataJSON);

    // xhr.send(data);
    
}

function sendDataJSONCallback1(data, mailForm, arrPlaceholder, errorMess) {
    //иннактивирую кнопку пока не пришло сообщение с сервера
    mailForm[2].setAttribute("disabled", true);

    fetch("./php/callback.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        credentials: 'same-origin',
        body: "data=" + JSON.stringify(data)
    })
     .then(function (response) {
       return response.text()
     })
     .then(function (value) { //если все ОК
       errorMess.innerHTML = value;
       //активирую кнопку
       mailForm[2].removeAttribute("disabled");
     })
     .catch(function (error) {
        errorMess.innerHTML = error // если ошибка
      })

    //восстанавливаю первоначальный вид input
    for (let i = 0; i < mailForm.length; i++) {
        mailForm[i].value = '';
        mailForm[i].setAttribute('placeholder', arrPlaceholder[i])
        // mailForm[i].removeAttribute('placeholder');
        mailForm[i].classList.remove('invalid');
        mailForm[i].classList.remove('valid');
        errorMess.innerHTML = '';
    }
}


function validateCallback(elem, pattern, errorMess, arrMess, i) {
    let res = elem[i].value.search(pattern[i]);
    if (res == -1) { //если ошибка в заполнении
        elem[i].className = "invalid";
        elem[i].value = '';
        elem[i].setAttribute('placeholder', arrMess[i])
    } 
    else { //если нет ошибок
        elem[i].className = "valid";
    }
    // errorMess.innerHTML = arrMess[i];
}


