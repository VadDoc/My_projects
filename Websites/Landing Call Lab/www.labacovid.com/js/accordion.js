window.addEventListener('load', getElem, false);

function getElem() {
    switchAnswer('.main-3-2-1-elem', '.main-3-2-1-elem-answer', '.main-3-2-1-elem-3 img');
    switchAnswer('.main-5-2-1-question', '.main-5-2-1-answer', '.main-5-2-1-question-2 img');
}

function switchAnswer(divElems, divAnswers, imgArrow) {
    let elems = document.querySelectorAll(divElems);
    let answers = document.querySelectorAll(divAnswers);
    let arrows = document.querySelectorAll(imgArrow);

    for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', function() {
            showAnswer(i);
        }, false)
    }

    function showAnswer(num) {
        for (let i = 0; i < answers.length; i++) {
            answers[i].style.display = 'none';
            arrows[i].className = '';
        }
    
        answers[num].style.display = 'block';
        arrows[num].className = 'rotate';
        elems[num].removeEventListener('click', showAnswer, false);
        elems[num].addEventListener('click', hideAnswer, false);
    }
    
    function hideAnswer() {
        for (let i = 0; i < answers.length; i++) {
            answers[i].style.display = 'none';
            arrows[i].className = '';
            elems[i].removeEventListener('click', hideAnswer, false);
            elems[i].addEventListener('click', showAnswer, false);
        }
    }
}
