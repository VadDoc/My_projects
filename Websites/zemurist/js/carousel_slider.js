window.addEventListener('load', carouseles);
	
function carouseles() {
    let clientWidth = document.body.clientWidth

    if(clientWidth < 992) {
        carousel('.card-1', '.container-arr-left-1', '.container-arr-right-1');
        carousel('.card-2', '.container-arr-left-2', '.container-arr-right-2');
    }
}

function carousel(container, divArrowLeft, divArrowRight) {
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

