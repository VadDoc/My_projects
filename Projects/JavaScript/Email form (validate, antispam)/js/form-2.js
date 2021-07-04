window.addEventListener('load', getHandlerOrder, false);

function getHandler() {
    let mailForm = document.orderForm;    
    let errorMess = document.querySelector('#error-mess-order');
    let antiSpam = document.querySelector('#anti-spam-order');

    let arrPatterns = [
        /\S{3,}/, //имя
        /\w/, //телефон
        // /\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}/, //телефон
        /\S{3,}/ //штукатурка
    ];
    let arrMess = [ // в placeholder при ошибке
        'Необходимо больше двух букв',
        'Правильный формат +38 (000) 000-00-00',
        'Необходимо больше двух букв'
    ];
    let arrPlaceholder = [ //восстанавливаем placeholder
        'Укажите имя',
        'Укажите номер телефона',
        'Укажите вид штукатурки'
    ];
    let arrErrMess = [ //красным при отсутствии заполнения
        'Введите имя',
        'Введите номер телефона',
        'Введите вид штукатурки'
    ];

    mailForm[4].setAttribute("disabled", true)
    
    //валидация по паттерну
    for (let i = 0; i < mailForm.length - 3; i++) { // 
        mailForm[i].addEventListener('change', function() {
            validate(mailForm, arrPatterns, errorMess, arrMess, i);
        })
        //антиспам
        mailForm[3].addEventListener('change', function() {
            if (!mailForm[3].checked) mailForm[4].setAttribute("disabled", true);
            else if (mailForm[3].checked && !antiSpam.value) mailForm[4].removeAttribute("disabled");
        
        })
    }

    mailForm[4].addEventListener('click', function() {
        //валидации на наличия заполнения формы
        for (let i = 0; i < mailForm.length - 3; i++) { 
            if (mailForm[i].value == '') {
                errorMess.innerHTML = arrErrMess[i];
                return false;    
            }
        }
        // errorMess.innerHTML = '';
        let data = { //сохраняю, убираю лишние пробелы вначале и вконце
            'name': mailForm[0].value.trim(), 
            'tel': mailForm[1].value.trim(), 
            'sht': mailForm[2].value.trim(), 
        }   
 
        sendDataJSON(data, mailForm, arrPlaceholder, errorMess)
    })
}

function sendDataJSON(data, mailForm, arrPlaceholder, errorMess) {
    //иннактивирую кнопку пока не пришло сообщение с сервера
    mailForm[4].setAttribute("disabled", true);

    let status = function (response) {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response);
      }

    let text = function (response) {
      return response.text();
    }

    fetch("wp-content/themes/XXXXXXX/php/order.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        credentials: 'same-origin',
        body: "data=" + JSON.stringify(data)
    })
     .then(status)
     .then(text)
     .then(function (value) { //если все ОК
       errorMess.innerHTML = value;
       //активирую кнопку
       mailForm[4].removeAttribute("disabled");
     })
     .catch(function (error) {
        errorMess.innerHTML = "Были ошибки, сообщение не отправлено" // если ошибка
      })

    //восстанавливаю первоначальный вид input
    for (let i = 0; i < mailForm.length; i++) {
        mailForm[i].value = '';
        mailForm[i].setAttribute('placeholder', arrPlaceholder[i])
        // mailForm[i].removeAttribute('placeholder');
        mailForm[i].classList.remove('invalid');
        mailForm[i].classList.remove('valid');
        mailForm[4].value = 'Отправить';
        errorMess.innerHTML = '';
    }
}


function validate(elem, pattern, errorMess, arrMess, i) {
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


