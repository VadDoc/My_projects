window.addEventListener('load', getHandler, false);

function getHandler() {
    let mailForm = document.mailForm;    
    let errorMess = document.querySelector('#error-mess');
    let antiSpam = document.querySelector('#anti-spam');

    let arrPatterns = [
        /\S{3,}/, 
        /\d{3,}/, //телефон
        /\S{5,}/
    ];
    let arrMess = [
        'Имя должно состоять хотя бы из трех букв',
        'Укажите номер телефона',
        'Сообщение должно состоять хотя бы из пяти букв'
    ];
    let arrPlaceholder = [
        'Укажите имя',
        'Укажите номер телефона',
        'Напишите сообщение'
    ];
    let arrErrMess = [
        'Введите имя',
        'Введите номер телефона',
        'Введите сообщение не менее 5 символов'
    ];
    //валидация по паттерну
    for (let i = 0; i < mailForm.length - 3; i++) { // 
        mailForm[i].addEventListener('change', function() {
            validate(mailForm, arrPatterns, errorMess, arrMess, i);
        })
        //антиспам, checkbox
        if (antiSpam.value) mailForm[3].setAttribute("disabled", true);
        else mailForm[3].removeAttribute("disabled");

        mailForm[3].addEventListener('change', function() {
            if (!mailForm[3].checked) mailForm[4].setAttribute("disabled", true);
            else if (mailForm[3].checked && !antiSpam.value) mailForm[4].removeAttribute("disabled");
        
        })

    }

    mailForm[3].addEventListener('click', function() {
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
            'mes': mailForm[2].value.trim(), 
        }   
        // console.log(data)
 
        sendDataJSON(data, mailForm, arrPlaceholder, errorMess)
    })
}

function sendDataJSON(data, mailForm, arrPlaceholder, errorMess) {
    //иннактивирую кнопку пока не пришло сообщение с сервера
    mailForm[3].setAttribute("disabled", true);

    let status = function (response) {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText))
        }
        return Promise.resolve(response)
      }
      var text = function (response) {
        return response.text()
      }

    fetch("https://zemelnij-advokat.ru/wp-content/themes/zemurist/php/form-main.php", {
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
       mailForm[3].removeAttribute("disabled");
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


