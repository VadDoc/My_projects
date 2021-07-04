// promalp

// window.addEventListener('load', carouseles);
	
function carouseles() {
    slider('.main-container-2-cards-card', '.container-arr-left-2', '.container-arr-right-2');
    slider('.main-container-5-box', '.container-arr-left-5', '.container-arr-right-5');
    slider('.main-container-6-content-box', '.container-arr-left-6', '.container-arr-right-6');
}

function slider(container, divArrowLeft, divArrowRight) {
    let arrCards = document.querySelectorAll(container);
    let arrowLeft = document.querySelector(divArrowLeft);
    let arrowRight = document.querySelector(divArrowRight);
    
    arrCards[0].style.display = 'block';

    let a = 0;
    
    arrowLeft.addEventListener('click', function() {
            for (let i = 0; i < arrCards.length; i++) {
            arrCards[i].style.display = 'none';
        }
           a--
           if (a == -1) a = arrCards.length - 1
           arrCards[a].style.display = 'block';
    })


    arrowRight.addEventListener('click', function() {
        for (let i = 0; i < arrCards.length; i++) {
            arrCards[i].style.display = 'none';
        }
        a++
        if (a == (arrCards.length)) a = 0
        arrCards[a].style.display = 'block';
    })
}

