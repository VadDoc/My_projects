window.addEventListener('load', function() {
    handlerBtnShowForm('.form-service-order-btn', '.main-page-form');
}, false);

function handlerBtnShowForm(btnForm, div) {
    let btnForms = document.querySelectorAll(btnForm);

    for (let i = 0; i < btnForms.length; i++) {
        let aboutBtn = btnForms[i][0].value

        btnForms[i].addEventListener('click', function() {
            showForm(div, aboutBtn);
        }, false)
    }
}

function showForm(div, aboutBtn) {
    let divForm = document.querySelector(div);
    divForm.style.display = 'flex';

    divForm.addEventListener('click', function(e) {
        if (e.target.matches(div)) {
            this.style.display = 'none';
        }
    })

    let flag = document.querySelector('.form-flag');

    if(flag.value == 'mail') {
       fillFormMail(aboutBtn); 
    } else if (flag.value == 'phone') {
        fillFormPhone(aboutBtn);
    }
}

function fillFormPhone(aboutBtn) {
    let mailForm = document.querySelector('.order-form');    
    let errorMess = document.querySelector('#error-mess-order');
    let antiSpam = document.querySelector('#anti-spam-order');

    let arrPatterns = [
        /\S{3,}/, //имя   
        /\d{3,}/ 

    ];
    let arrMess = [ // в placeholder при ошибке
        'Необходимо больше двух букв',
        'Неправильной формат',
    ];
    let arrPlaceholder = [ //восстанавливаем placeholder
        'Укажите имя',
        'Укажите номер телефона',
    ];
    let arrErrMess = [ //красным при отсутствии заполнения
        'Введите имя',
        'Укажите номер телефона',
    ];

    mailForm[1].setAttribute('placeholder', 'Номер телефона');
    mailForm[2].style.display = 'none';
    mailForm[3].style.display = 'none';


    mailForm[5].setAttribute("disabled", true)
    
    //валидация по паттерну
    for (let i = 0; i < mailForm.length - 6; i++) { // 
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
        for (let i = 0; i < mailForm.length - 6; i++) { 
            if (mailForm[i].value == '') {
                errorMess.innerHTML = arrErrMess[i];
                return false;    
            }
        }
        // errorMess.innerHTML = '';
        let data = { //сохраняю, убираю лишние пробелы вначале и вконце
            'name': mailForm[0].value.trim(), 
            'email': mailForm[1].value.trim(), 
            'about': aboutBtn, 
        }   
 
        sendDataJSON(data, mailForm, arrPlaceholder, errorMess, 'phone')
    })
}

function fillFormMail(aboutBtn) {
    let mailForm = document.querySelector('.order-form');    
    let errorMess = document.querySelector('.error-mess');
    let antiSpam = document.querySelector('.anti-spam');

    let arrPatterns = [
        /\S{3,}/, //имя
        /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i,
        /\S{3,}/, 
        /\S{3,}/ 

    ];
    let arrMess = [ // в placeholder при ошибке
        'Необходимо больше двух букв',
        'Неправильной формат email',
        'Необходимо больше двух букв',
        'Необходимо больше двух букв',
    ];
    let arrPlaceholder = [ //восстанавливаем placeholder
        'Укажите имя',
        'Укажите e-mail',
        'Укажите тему',
        'Сообщение',
    ];
    let arrErrMess = [ //красным при отсутствии заполнения
        'Введите имя',
        'Введите e-mail',
        'Укажите тему',
        'Напишите сообщение',
    ];

    mailForm[5].setAttribute("disabled", true)
    
    //валидация по паттерну
    for (let i = 0; i < mailForm.length - 4; i++) { // 
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
        for (let i = 0; i < mailForm.length - 4; i++) { 
            if (mailForm[i].value == '') {
                errorMess.innerHTML = arrErrMess[i];
                return false;    
            }
        }
        // errorMess.innerHTML = '';
        let data = { //сохраняю, убираю лишние пробелы вначале и вконце
            'name': mailForm[0].value.trim(), 
            'email': mailForm[1].value.trim(), 
            'subj': mailForm[2].value.trim(), 
            'mess': mailForm[3].value.trim(), 
            'about': aboutBtn, 
        }   
 
        sendDataJSON(data, mailForm, arrPlaceholder, errorMess, 'mail')
    })
}

function sendDataJSON(data, mailForm, arrPlaceholder, errorMess, serverName) {
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

    fetch(`http://sk.medtech.com.ua/wp-content/themes/skgroup/php/${serverName}-form.php`, {
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
        elem[i].className = "invalid";
        elem[i].value = '';
        elem[i].setAttribute('placeholder', arrMess[i])
    } 
    else { //если нет ошибок
        elem[i].className = "valid";
    }
    // errorMess.innerHTML = arrMess[i];
}


