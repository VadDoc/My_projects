window.addEventListener('load', getCoord, false);

function getCoord() {
    let box = document.querySelector('.main-why-we');

    let divY = box.getBoundingClientRect().top;
    let scrollY = box.scrollTop;
    let diff = 350;
    
    if (divY < scrollY  + diff) {
        startCounter('.main-why-we-2-2 span', 170, 10);
        startCounter('.main-why-we-3-2 span', 60, 20);
    }

    let getScroll = function() {
      if (divY < pageYOffset + diff) {
          startCounter('.main-why-we-2-2 span', 170, 10);
          startCounter('.main-why-we-3-2 span', 60, 20);
          window.removeEventListener('scroll', getScroll);
      }
    }

    window.addEventListener('scroll', getScroll);
}

function startCounter(div, n, inter) {
    let counterBox = document.querySelector(div);
    let counter = counterBox.innerHTML;
    let intervalHandler;
    
    function count() {
        if (counter < n) {
            counter++;
            counterBox.innerHTML = counter;
        }
    }   

    intervalHandler = setInterval(count, inter); 
}

