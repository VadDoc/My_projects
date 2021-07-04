window.addEventListener('load', getHandlerOrder1, false);

function getHandlerOrder1() {
    let mailForm1 = document.querySelector('#order-service-sidebar');   
    let errorMess1 = document.querySelector('#error-mess-order');
    let antiSpam1 = document.querySelector('#anti-spam-order');

    let arrPatterns1 = [
        /\S{3,}/, //имя
        /\d{3,}/, //телефон
        /\S{3,}/, //текст
        /\d/,
        /\d/,
        /\d/,
    ];
    let arrMess1 = [ // в placeholder при ошибке
        'Введите больше двух букв',
        'Неправильный формат',
        'Введите больше двух букв',
        'Введите дату',
        'Час',
        'Мин'
    ];
    let arrPlaceholder1 = [ //восстанавливаем placeholder
        'Укажите имя',
        'Укажите номер телефона',
        'Укажите вид услуги',
        'Дата',
        'Час',
        'Мин',
        '',
        'Отправить'
    ];
    let arrErrMess1 = [ //красным при отсутствии заполнения
        'Введите имя',
        'Введите номер телефона',
        'Введите вид услуги',
        'Введите дату встречи',
        'Введите время встречи',
        'Забыли про минуты'
    ];

    mailForm1[7].setAttribute("disabled", true)
    
    //валидация по паттерну
    for (let i = 0; i < mailForm1.length - 4; i++) { // 
        mailForm1[i].addEventListener('change', function() {
            validate1(mailForm1, arrPatterns1, errorMess1, arrMess1, i);
        })
        //антиспам
        mailForm1[6].addEventListener('change', function() {
            if (!mailForm1[6].checked) mailForm1[7].setAttribute("disabled", true);
            else if (mailForm1[6].checked && !antiSpam1.value) mailForm1[7].removeAttribute("disabled");
        
        })
    }

    mailForm1[7].addEventListener('click', function() {
        //валидации на наличия заполнения формы
        for (let i = 0; i < mailForm1.length - 4; i++) { 
            if (mailForm1[i].value == '') {
                errorMess1.innerHTML = arrErrMess1[i];
                return false;    
            }
        }
        // errorMess1.innerHTML = '';
        let data = { //сохраняю, убираю лишние пробелы вначале и вконце
            'name': mailForm1[0].value.trim(), 
            'tel': mailForm1[1].value.trim(), 
            'serv': mailForm1[2].value.trim(), 
            'date': mailForm1[3].value.trim(), 
            'hour': mailForm1[4].value.trim(), 
            'min': mailForm1[5].value.trim(), 
            'form': mailForm1[8].value.trim(),
        }   

        console.log(data)
 
        sendDataJSON1(data, mailForm1, arrPlaceholder1, errorMess1)
    })
}

function sendDataJSON1(data, mailForm1, arrPlaceholder1, errorMess1) {
    let success = document.querySelector('#success-container')
    //иннактивирую кнопку пока не пришло сообщение с сервера
    mailForm1[7].setAttribute("disabled", true);

    let status = function (response) {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response);
      }

    let text = function (response) {
      return response.text();
    }

    fetch("/wp-content/themes/pearlspa/php/order-form.php", {
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
       success.innerHTML = value;
       //активирую кнопку
       mailForm1[7].removeAttribute("disabled");
     })
     .catch(function (error) {
        errorMess1.innerHTML = "Были ошибки, сообщение не отправлено" // если ошибка
      })

    //восстанавливаю первоначальный вид input
    for (let i = 0; i < mailForm1.length-3; i++) {
        mailForm1[i].value = '';
        mailForm1[i].setAttribute('placeholder', arrPlaceholder1[i])
        // mailForm1[i].removeAttribute('placeholder');
        mailForm1[i].classList.remove('invalid');
        mailForm1[i].classList.remove('valid');
        // mailForm1[7].value = 'Отправить';
        // errorMess1.innerHTML = '';
    }
    mailForm1[7].value = 'Отправить';
}

function validate1(elem, pattern, errorMess1, arrMess1, i) {
    let res = elem[i].value.search(pattern[i]);
    if (res == -1) { //если ошибка в заполнении
        elem[i].classList.add('invalid');
        elem[i].value = '';
        elem[i].setAttribute('placeholder', arrMess1[i])
    } 
    else { //если нет ошибок
        elem[i].classList.add('valid');
    }
}
