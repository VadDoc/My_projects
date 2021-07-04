window.addEventListener('load', checkScreenSize, false);

function checkScreenSize() {
    let clientWidth = document.body.clientWidth
    switch (true) {
        case clientWidth < 992:
            createPromise1("https://zemelnij-advokat.ru/www/wp-content/themes/zemurist/js/main_menu.js");   
            // createPromise2("http://new.promalp-group.com/wp-content/themes/promapl/js/carousel_slider.js");
    }
}

function createPromise1(src) {
    let promise = loadScript(src);
    promise.then(script => menu());
}

// function createPromise2(src) {
//     let promise = loadScript(src);
//     promise.then(script => carouseles());
// }

function loadScript(src) {
    return new Promise(function(resolve) {
      let script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(script);
      document.head.append(script);
    });
  }


