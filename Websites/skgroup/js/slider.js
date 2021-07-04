window.addEventListener('load', multiItemSlider, false);

function multiItemSlider () {
    let
        mainElement = document.querySelector('.slider'), // основный элемент блока
        sliderWrapper = mainElement.querySelector('.slider-wrapper'), // обертка для .slider-item
        sliderItems = mainElement.querySelectorAll('.slider-item'), // элементы (.slider-item)
        sliderControls = mainElement.querySelectorAll('.slider-control'), // элементы управления
        sliderControlLeft = mainElement.querySelector('.slider-control-left'), // кнопка "LEFT"
        sliderControlRight = mainElement.querySelector('.slider-control-right'), // кнопка "RIGHT"
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
        if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) {
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