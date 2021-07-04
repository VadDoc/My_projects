window.addEventListener('load', getCoord, false);

function getCoord() {
    let box = document.querySelector('.all-services-page-chrono');

    let divY = box.getBoundingClientRect().top;
    let scrollY = box.scrollTop;
    let diff = 500;
    
    if (divY < scrollY  + diff) {
        startCounter('#all-services-chrono-1', 600);
        startCounter('#all-services-chrono-2', 1200);
        startCounter('#all-services-chrono-3', 26000);
        startCounter('#all-services-chrono-4', 170);
    }

    let getScroll = function() {
      if (divY < pageYOffset + diff) {
        startCounter('#all-services-chrono-1', 600);
        startCounter('#all-services-chrono-2', 1200);
        startCounter('#all-services-chrono-3', 26000);
        startCounter('#all-services-chrono-4', 170);
          window.removeEventListener('scroll', getScroll);
      }
    }

    window.addEventListener('scroll', getScroll);
}

function startCounter(div, num) {
    let counterBox = document.querySelector(div);
    let counter = 0;
    let time = 3000;

    let interval = 10;

    let addNum = interval  * num / time ;

    let intervalHandler;
    
    function count() {
        if (counter < num) {
            counter += addNum;
            counterBox.innerHTML = Math.floor(counter);
        }
    }   

    intervalHandler = setInterval(count, interval); 
}

