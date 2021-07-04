window.addEventListener('load', getHandler, false);

function getHandler() {
    let mailForm = document.mailForm;    
    let errorMess = document.querySelector('#error-mess');
    let arrPatterns = [
        /\S{3,}/, 
        /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i, 
        /\S{5,}/
    ];
    let arrMess = [
        'Имя должно состоять хотя бы из трех букв',
        'Неправильной формат email',
        'Сообщение должно состоять хотя бы из пяти букв'
    ];
    let arrPlaceholder = [
        'Укажите имя',
        'Укажите e-mail',
        'Напишите сообщение'
    ];
    let arrErrMess = [
        'Введите имя',
        'Введите email',
        'Введите сообщение не менее 5 символов'
    ];
    //валидация по паттерну
    for (let i = 0; i < mailForm.length - 1; i++) {
        mailForm[i].addEventListener('change', function() {
            validate(mailForm, arrPatterns, errorMess, arrMess, i);
        })
    }

    mailForm[3].addEventListener('click', function() {
        //валидации на наличия заполнения формы
        for (let i = 0; i < mailForm.length - 1; i++) {
            if (mailForm[i].value == '') {
                errorMess.innerHTML = arrErrMess[i];
                return false;    
            }
        }

        errorMess.innerHTML = '';
        let data = { //сохраняю, убираю лишние пробелы вначале и вконце
            'name': mailForm[0].value.trim(), 
            'email': mailForm[1].value.trim(), 
            'message': mailForm[2].value.trim(),  
        }    
        sendDataJSON(data, mailForm, arrPlaceholder)
    })
}

function sendDataJSON(data, mailForm, arrPlaceholder) {
    console.log(data)
    //иннактивирую кнопку пока не пришло сообщение с сервера
    mailForm[3].setAttribute("disabled", true);

    let xhr = new XMLHttpRequest();
    let url = `./ajax/mail.php`;
    xhr.open("POST", url, true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Type", "html");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText)
            //активирую кнопу
            mailForm[3].removeAttribute("disabled");
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
    }

    // let dataJSON = JSON.stringify(data);
    // xhr.send(dataJSON);
    xhr.send(data);
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


