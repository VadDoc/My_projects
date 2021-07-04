window.addEventListener('load', getHandler, false);

function getHandler() {
    let mailForm = document.mailForm;    
    let errorMess = document.querySelector('#error-mess');
    let antiSpam = document.querySelector('#anti-spam');

    let arrPatterns = [
        /\S{3,}/, 
        /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i, 
        /\S{5,}/
    ];
    let arrMess = [
        'Минимум три буквы',
        'Неправильной формат email',
        'Минимум пять букв'
    ];
    let arrPlaceholder = [
        'Укажите имя',
        'Укажите e-mail',
        'Напишите сообщение'
    ];
    let arrErrMess = [
        'Введите имя',
        'Введите email',
        'Минимум пять букв'
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
            'mail': mailForm[1].value.trim(), 
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

    fetch("https://zemelnij-advokat.ru/wp-content/themes/zemurist/php/form-contact.php", {
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


