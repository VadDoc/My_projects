window.addEventListener('load', getPhotoElems, false);

function getPhotoElems() {
    let menuItems = document.querySelectorAll('.gallery-menu-item');
    let allImgsPrevGallery = document.querySelectorAll('.img-prev-gallery-0');
    let activeImgsPrevGallery = allImgsPrevGallery;

    for (let i = 0; i < activeImgsPrevGallery.length; i++) {
        activeImgsPrevGallery[i].style.display = 'flex';
        activeImgsPrevGallery[i].addEventListener('click', function() {
            showGallery(i+1);
        })
    }

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            showPrevGallery(i);
        })
    }
}

function showPrevGallery(num) {
    let allImgsPrevGallery = document.querySelectorAll('.img-prev-gallery-0');
    let activeImgsPrevGallery = allImgsPrevGallery;

    for (let i = 0; i < allImgsPrevGallery.length; i++) {
        allImgsPrevGallery[i].style.display = 'none';
    }

    for (let i = 0; i < activeImgsPrevGallery.length; i++) {
        activeImgsPrevGallery = document.querySelectorAll(`.img-prev-gallery-${num}`)
        activeImgsPrevGallery[i].style.display = 'block';
    }
}

function showGallery(num) {
    let galleryContainer = document.querySelector('.gallery-container');
    let allImgsGallery = document.querySelectorAll('.img-gallery-0');
    let activeImgsGallery = document.querySelectorAll(`.img-gallery-${num}`);

    galleryContainer.style.display = 'flex';

    let close = document.querySelector('.close');

    close.addEventListener('click', function() {
        window.location.reload();
    })

    for (let i = 0; i < allImgsGallery.length; i++) {
        allImgsGallery[i].style.display = 'none';
    }

    for (let i = 0; i < activeImgsGallery.length; i++) {
        activeImgsGallery[i].style.display = 'flex';
    }

    multiItemSlider(activeImgsGallery);
}



function multiItemSlider(activeImgsGallery) {
    let
        mainElement = document.querySelector('.slider'), // основный элемент блока
        sliderWrapper = mainElement.querySelector('.slider-wrapper'), // обертка для .slider-item
        sliderItems = activeImgsGallery, // элементы (.slider-item)
        sliderControls = mainElement.querySelectorAll('.slider-control'), // элементы управления
        wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width), // ширина обёртки
        itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width), // ширина одного элемента    
        positionLeftItem = 0, // позиция левого активного элемента
        transform = 0, // значение транфсофрмации .sliderwrapper
        step = itemWidth / wrapperWidth * 100, // величина шага (для трансформации)
        items = [], // массив элементов
        interval = 0,
        config = {
          isCycling: false, // автоматическая смена слайдов
          direction: 'right', // направление смены слайдов
          interval: 2000, // интервал между автоматической сменой слайдов
          pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
        },
        configStart = {
          isCycling: true
        };
  
    for (let key in configStart) {
      if (key in config) {
        config[key] = configStart[key];
      }
    }
    // наполнение массива items
    sliderItems.forEach(function (item, index) {
      items.push({ item: item, position: index, transform: 0 });
    });
    let position = {
      getItemMin: function () {
        let indexItem = 0;
        items.forEach(function (item, index) {
          if (item.position < items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        let indexItem = 0;
        items.forEach(function (item, index) {
          if (item.position > items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return items[position.getItemMin()].position;
      },
      getMax: function () {
        return items[position.getItemMax()].position;
      }
    }
    function transformItem(direction) {
      let nextItem;
      if (direction === 'right') {
        positionLeftItem++;
        if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) { // Можно поменять 1 на 2 при 3 слайдах
          nextItem = position.getItemMin();
          items[nextItem].position = position.getMax() + 1;
          items[nextItem].transform += items.length * 100;
          items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
        }
        transform -= step;
      }
      if (direction === 'left') {
        positionLeftItem--;
        if (positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          items[nextItem].position = position.getMin() - 1;
          items[nextItem].transform -= items.length * 100;
          items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
        }
        transform += step;
      }
      sliderWrapper.style.transform = 'translateX(' + transform + '%)';
    }
    function cycle(direction) {
      if (!config.isCycling) {
        return;
      }
      interval = setInterval(function () {
        transformItem(direction);
      }, config.interval);
    }
    // обработчик события click для кнопок "назад" и "вперед"
    function controlClick(e) {
      if (e.target.classList.contains('slider-control')) {
        e.preventDefault();
        let direction = e.target.classList.contains('slider-control-right') ? 'right' : 'left';
        transformItem(direction);
        clearInterval(interval);
        cycle(config.direction);
      }
    };
    function setUpListeners() {
      // добавление к кнопкам "назад" и "вперед" обработчика controlClick для событя click
      sliderControls.forEach(function (item) {
        item.addEventListener('click', controlClick);
      });
      if (config.pause && config.isCycling) {
        mainElement.addEventListener('mouseenter', function () {
          clearInterval(interval);
        });
        mainElement.addEventListener('mouseleave', function () {
          clearInterval(interval);
          cycle(config.direction);
        });
      }
    }
    // инициализация
    setUpListeners();
    cycle(config.direction);
    return {
      right: function () { // метод right
        transformItem('right');
      },
      left: function () { // метод left
        transformItem('left');
      },
      stop: function () { // метод stop
        config.isCycling = false;
        clearInterval(interval);
      },
      cycle: function () { // метод cycle 
        config.isCycling = true;
        clearInterval(interval);
        cycle();
      }
    }
}
