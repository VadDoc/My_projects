    // Задание 1. Хронометр

    window.onload = function () {
      let counterMSec = 0;
      let counterSec = 0;
      let counterMin = 01;

      let MSecHandler;
      let SecHandler;
      let MinHandler;

      let count = () => {
        countMSec();
        countSec();
        countMin();
      }

      let countMSec = () => {
        if (counterMSec < 10) {
          get("outputMSec").innerHTML = `0${counterMSec}`;
        } else {
          get("outputMSec").innerHTML = counterMSec;
        }
        counterMSec++;
        if (counterMSec === 60) {
          counterMSec = 0;
        }
      }

      let countSec = () => {
        if (counterSec < 10) {
          get("outputSec").innerHTML = `0${counterSec}`;
        } else {
          get("outputSec").innerHTML = counterSec;
        }
        counterSec++;
        if (counterSec === 60) {
          counterSec = 0;
        }
      }

      let countMin = () => {
        if (counterMin < 10) {
          get("outputMin").innerHTML = `0${counterMin}`;
        } else {
          get("outputMin").innerHTML = counterMin;
        }
        counterMin++;
      }

      get("startButton").onclick = function () {
        MSecHandler = setInterval(countMSec, 10);
        SecHandler = setInterval(countSec, 1000);
        MinHandler = setInterval(countMin, 60000);
      }

      get("stopButton").onclick = function () {
        clearInterval(MSecHandler);
        clearInterval(SecHandler);
        clearInterval(MinHandler);
      }

      get("resetButton").onclick = function () {
        get("outputMSec").innerHTML = '00';
        get("outputSec").innerHTML = '00';
        get("outputMin").innerHTML = '00';
      }
    }

    var get = function (id) {
      return document.getElementById(id);
    }