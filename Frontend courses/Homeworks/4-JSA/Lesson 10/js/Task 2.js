// Задание
// Разработайте страницу с двумя полями ввода и кнопкой. Пользователь должен вводить в поля вводов целочисленный значения, а нажатие по кнопке должно приводить к асинхронному запросу на сервер. Запрашивать следует обработчик CalcHandler.ashx, который находиться вместе с примерами в уроке 
// CyberBionic Systematics® 19Eugene Sverstyuk Str.,5floorKyiv, Ukraine Tel.  0 800 750312E-mail: edu@cbsystematics.comSite:www.edu.cbsystematics.comPage| 3Title: JavaScript AdvancedLesson: 10номер 10, обработчик принимает два post параметра с именами ‘a’ и ‘b'.Результат,который возвращает обработчик выведите на страницу

window.addEventListener('load', init, false);

function init() {
    formOrder.onsubmit = onsubmitHandler;
}

let а;
let b;

document.getElementById('button').addEventListener('click',
    function () {
        а = document.getElementById('a').value;
        b = document.getElementById('b').value;

        if (a == 0) a = 0; //чтобы пустое поле отображалось, как "0", а не пустота
        if (b == 0) b = 0;
    }, false)



//     let xhr = new XMLHttpRequest();

//     // настройка объекта запроса с указание метода отправи запроса и данных
//     xhr.open("GET", "./js/CalcHandler.ashx?a=5&b=2");

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             document.getElementById("output").innerHTML = xhr.responseText;
//         }
//     }

//     xhr.send();



function onsubmitHandler() {
    let invalid = false;

    for (let i = 0; i < formOrder.elements.length; ++i) {
        let e = formOrder.elements[i];
        if (e.type == "text" && e.onchange) {
            e.onchange();
            if (e.className == "invalid") invalid = true;
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false;
    }
}