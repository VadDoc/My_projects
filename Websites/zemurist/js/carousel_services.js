window.addEventListener('load', checkScreenSize);

function checkScreenSize() {
    let clientWidth = document.body.clientWidth

    if(clientWidth < 992) {
        carousele();
    }
}


function carousele() {
    let arrCards = document.querySelectorAll('.other-service');
    let arrowLeft = document.querySelector('.container-arr-left-3');
    let arrowRight = document.querySelector('.container-arr-right-3');
    
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
