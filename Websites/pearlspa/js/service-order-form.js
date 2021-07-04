window.addEventListener('load', getHandlerServiceOrder, false);

function getHandlerServiceOrder() {
    let arrFormBtn = document.querySelectorAll('.form-service-order-btn');

    for (let i = 0; i < arrFormBtn.length; i++) {
        let serviceTitle = arrFormBtn[i][0].value;
        let formTitle = arrFormBtn[i][1].value;
        arrFormBtn[i].addEventListener('click', function() {
            openForm(serviceTitle, formTitle);
        })
    }
}

function openForm(serviceTitle, formTitle) {
    let formService = document.querySelector('.form-service');
    let formServiceTitle = document.querySelector('.form-service-title');
    let mailForm = document.querySelector('.form-order-service'); 
    let labelHidden = document.querySelectorAll('.label-hidden')

    formService.style.display = 'flex';
    formServiceTitle.innerHTML = formTitle;

    if (formTitle === 'Заказать обратный звонок') {
        mailForm[2].style.display = 'none';
        mailForm[3].style.display = 'none';
        labelHidden[0].style.display = 'none';
        labelHidden[1].style.display = 'none';
    } 

    formService.addEventListener('click', function(e) {

        if (e.target.tagName != 'INPUT' && e.target.tagName != 'FORM' && e.target.tagName != 'TEXTAREA'  && 
        e.target.tagName != 'P' && e.target.tagName != 'SPAN' && e.target.tagName != 'LABEL') {
            this.style.display = 'none';
            window.location.reload();
        } 
    })

    fillForm(serviceTitle, mailForm)
}

function fillForm(serviceTitle, mailForm) {
    let errorMess = document.querySelector('.error-mess-service');
    let antiSpam = document.querySelector('.anti-spam-service');

    let arrPatterns = [
        /\S{3,}/, //имя
        /\d{3,}/, //телефон
        /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i,  //email
        /\S/,
    ];
    let arrMess = [ // в placeholder при ошибке
        'Введите больше двух букв',
        'Неправильный формат',
        'Неправильной формат email',
        '',
    ];
    let arrPlaceholder = [ //восстанавливаем placeholder
        'Укажите имя',
        'Укажите номер телефона',
        'Укажите e-mail',
        '',
    ];
    let arrErrMess = [ //красным при отсутствии заполнения
        'Введите имя',
        'Введите номер телефона',
        'Введите e-mail',
        '',
    ];

    mailForm[5].setAttribute("disabled", true)
    
    //валидация по паттерну
    for (let i = 0; i < mailForm.length - 5; i++) { // 
        mailForm[i].addEventListener('change', function() {
            validate(mailForm, arrPatterns, errorMess, arrMess, i);
        })
        //антиспам
        mailForm[4].addEventListener('change', function() {
            if (!mailForm[4].checked) mailForm[5].setAttribute("disabled", true);
            else if (mailForm[4].checked && !antiSpam.value) mailForm[5].removeAttribute("disabled");
        
        })
    }

    mailForm[5].addEventListener('click', function() {
        //валидации на наличия заполнения формы
        for (let i = 0; i < mailForm.length - 5; i++) { 
            if (mailForm[i].value == '') {
                errorMess.innerHTML = arrErrMess[i];
                return false;    
            }
        }
        // errorMess.innerHTML = '';
        let data = { //сохраняю, убираю лишние пробелы вначале и вконце
            'name': mailForm[0].value.trim(), 
            'tel': mailForm[1].value.trim(), 
            'email': mailForm[2].value.trim(), 
            'text': mailForm[3].value.trim(), 
            'serv': serviceTitle, 
        }   
 
        sendDataJSON(data, mailForm, arrPlaceholder, errorMess)
    })
}

function sendDataJSON(data, mailForm, arrPlaceholder, errorMess) {
    let arrHide = document.querySelectorAll('.hide')
    //иннактивирую кнопку пока не пришло сообщение с сервера
    mailForm[5].setAttribute("disabled", true);

    let status = function (response) {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response);
      }

    let text = function (response) {
      return response.text();
    }

    fetch("/wp-content/themes/pearlspa/php/service-order-form.php", {
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
       mailForm[5].removeAttribute("disabled");
       for (let i = 0; i < arrHide.length; i++) {
        arrHide[i].style.display = 'none'
           
       }
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
        mailForm[5].value = 'Отправить';
        errorMess.innerHTML = '';
    }
}

function validate(elem, pattern, errorMess, arrMess, i) {
    let res = elem[i].value.search(pattern[i]);
    if (res == -1) { //если ошибка в заполнении
        elem[i].classList.add('invalid');
        elem[i].value = '';
        elem[i].setAttribute('placeholder', arrMess[i])
    } 
    else { //если нет ошибок
        elem[i].classList.add('valid');
    }
}
