// window.addEventListener('load', init, false);
window.addEventListener('load', getInfo, false);

function getInfo1() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./json/print.json", false);
    xhr.send();

    let data = JSON.parse(xhr.responseText);

    showTypePrint(data);
  }

function getInfo() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./json/print.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) { 
                showTypePrint(JSON.parse(xhr.responseText));
            }
        }
    }

    xhr.send();
  }
  
// function init() {
//     let data = {
//         priсeA3: {
//             den90side1num100: 10,
//             den90side1num200: 9,
//             den90side1num300: 8,
//             den90side1num500: 7,
//             den90side1num1000: 6,
//             den170side1num100: 15,
//             den170side1num200: 14,
//             den170side1num300: 13,
//             den170side1num500: 12,
//             den170side1num1000: 11,
//             den90side2num100: 20,
//             den90side2num200: 19,
//             den90side2num300: 18,
//             den90side2num500: 17,
//             den90side2num1000: 16,
//             den170side2num100: 25,
//             den170side2num200: 24,
//             den170side2num300: 23,
//             den170side2num500: 22,
//             den170side2num1000: 21
//         },

//         priсeBusinessCards: {
//             side1num100: 6,
//             side1num200: 5,
//             side1num300: 4,
//             side1num500: 3,
//             side1num1000: 2,
//             side2num100: 8,
//             side2num200: 7,
//             side2num300: 6,
//             side2num500: 5,
//             side2num1000: 4
//         },

//         priceFlayers1: {
//             den130side1num100: 10,
//             den130side1num200: 9,
//             den130side1num300: 8,
//             den130side1num500: 7,
//             den130side1num1000: 6,
//             den130side2num100: 13,
//             den130side2num200: 12,
//             den130side2num300: 11,
//             den130side2num500: 10,
//             den130side2num1000: 9,
//             den170side1num100: 12,
//             den170side1num200: 11,
//             den170side1num300: 10,
//             den170side1num500: 9,
//             den170side1num1000: 8,
//             den170side2num100: 14,
//             den170side2num200: 13,
//             den170side2num300: 12,
//             den170side2num500: 11,
//             den170side2num1000: 10,
//             den250side1num100: 15,
//             den250side1num200: 14,
//             den250side1num300: 13,
//             den250side1num500: 12,
//             den250side1num1000: 11,
//             den250side2num100: 18,
//             den250side2num200: 17,
//             den250side2num300: 16,
//             den250side2num500: 15,
//             den250side2num1000: 14

//         },

//         priceFlayers2: {
//             den130side1A4num100: 10,
//             den130side1A4num200: 9,
//             den130side1A4num300: 8,
//             den130side1A4num500: 7,
//             den130side1A4num1000: 6,
//             den130side2A4num100: 113,
//             den130side2A4num200: 112,
//             den130side2A4num300: 111,
//             den130side2A4num500: 110,
//             den130side2A4num1000: 19,
//             den170side1A4num100: 12,
//             den170side1A4num200: 11,
//             den170side1A4num300: 10,
//             den170side1A4num500: 9,
//             den170side1A4num1000: 8,
//             den170side2A4num100: 114,
//             den170side2A4num200: 113,
//             den170side2A4num300: 112,
//             den170side2A4num500: 111,
//             den170side2A4num1000: 110,
//             den250side1A4num100: 15,
//             den250side1A4num200: 14,
//             den250side1A4num300: 13,
//             den250side1A4num500: 12,
//             den250side1A4num1000: 11,
//             den250side2A4num100: 118,
//             den250side2A4num200: 117,
//             den250side2A4num300: 116,
//             den250side2A4num500: 115,
//             den250side2A4num1000: 114,
//             den130side1A5num100: 10,
//             den130side1A5num200: 9,
//             den130side1A5num300: 8,
//             den130side1A5num500: 7,
//             den130side1A5num1000: 6,
//             den130side2A5num100: 113,
//             den130side2A5num200: 112,
//             den130side2A5num300: 111,
//             den130side2A5num500: 110,
//             den130side2A5num1000: 19,
//             den170side1A5num100: 12,
//             den170side1A5num200: 11,
//             den170side1A5num300: 10,
//             den170side1A5num500: 29,
//             den170side1A5num1000: 8,
//             den170side2A5num100: 114,
//             den170side2A5num200: 113,
//             den170side2A5num300: 112,
//             den170side2A5num500: 111,
//             den170side2A5num1000: 110,
//             den250side1A5num100: 15,
//             den250side1A5num200: 14,
//             den250side1A5num300: 13,
//             den250side1A5num500: 12,
//             den250side1A5num1000: 11,
//             den250side2A5num100: 118,
//             den250side2A5num200: 117,
//             den250side2A5num300: 116,
//             den250side2A5num500: 115,
//             den250side2A5num1000: 114,
//             den130side1A6num100: 10,
//             den130side1A6num200: 9,
//             den130side1A6num300: 8,
//             den130side1A6num500: 7,
//             den130side1A6num1000: 6,
//             den130side2A6num100: 113,
//             den130side2A6num200: 112,
//             den130side2A6num300: 111,
//             den130side2A6num500: 110,
//             den130side2A6num1000: 19,
//             den170side1A6num100: 12,
//             den170side1A6num200: 11,
//             den170side1A6num300: 10,
//             den170side1A6num500: 9,
//             den170side1A6num1000: 8,
//             den170side2A6num100: 114,
//             den170side2A6num200: 113,
//             den170side2A6num300: 112,
//             den170side2A6num500: 111,
//             den170side2A6num1000: 110,
//             den250side1A6num100: 15,
//             den250side1A6num200: 14,
//             den250side1A6num300: 13,
//             den250side1A6num500: 12,
//             den250side1A6num1000: 11,
//             den250side2A6num100: 118,
//             den250side2A6num200: 117,
//             den250side2A6num300: 116,
//             den250side2A6num500: 115,
//             den250side2A6num1000: 114,
//         },

//         priceEurobooklet: {
//             den130num100: 10,
//             den130num200: 9,
//             den130num300: 8,
//             den130num500: 7,
//             den130num1000: 6,
//             den170num100: 13,
//             den170num200: 12,
//             den170num300: 11,
//             den170num500: 10,
//             den170num1000: 9,
//             den250num100: 16,
//             den250num200: 15,
//             den250num300: 14,
//             den250num500: 13,
//             den250num1000: 12
//         }
//     }

//     let ddd = JSON.stringify(data)
//     document.write(ddd)
//     // showTypePrint(data);
// }

function showTypePrint(data) {
    let selectTypePrint = document.querySelector('#select-type-print'),
        printA3 = document.querySelector('.print-a3'),
        businessCards = document.querySelector('.business-cards'),
        flyers1 = document.querySelector('.flyers-1'),
        flyers2 = document.querySelector('.flyers-2'),
        eurobooklets = document.querySelector('.eurobooklets'),
        containerResult = document.querySelector('.container-result')
    image = document.querySelector('.image');

    selectTypePrint.addEventListener('change', function () {
        containerResult.style.display = 'block';

        if (selectTypePrint.value == 'a3') {
            printA3.style.display = 'block';
            businessCards.style.display = 'none';
            flyers1.style.display = 'none';
            flyers2.style.display = 'none';
            eurobooklets.style.display = 'none';
            image.innerHTML = '<img src="./images/a3.png" alt="">'
            countA3(data);
        } else if (selectTypePrint.value == 'bc') {
            businessCards.style.display = 'block';
            printA3.style.display = 'none';
            flyers1.style.display = 'none';
            flyers2.style.display = 'none';
            eurobooklets.style.display = 'none';
            image.innerHTML = '<img src="./images/vc.jpg" alt="">'
            countVisitCards(data);
        } else if (selectTypePrint.value == 'f1') {
            flyers1.style.display = 'block';
            printA3.style.display = 'none';
            businessCards.style.display = 'none';
            flyers2.style.display = 'none';
            eurobooklets.style.display = 'none';
            image.innerHTML = '<img src="./images/flyers1.png" alt="">'
            countFlyers1(data);
        } else if (selectTypePrint.value == 'f2') {
            flyers2.style.display = 'block';
            printA3.style.display = 'none';
            businessCards.style.display = 'none';
            flyers1.style.display = 'none';
            eurobooklets.style.display = 'none';
            image.innerHTML = '<img src="./images/flyers2.jpg" alt="">'
            countFlyers2(data);
        } else if (selectTypePrint.value == 'euro') {
            eurobooklets.style.display = 'block';
            printA3.style.display = 'none';
            businessCards.style.display = 'none';
            flyers1.style.display = 'none';
            flyers2.style.display = 'none';
            image.innerHTML = '<img src="./images/eurobooklets.jpg" alt="">'
            countEuroBooklets(data);
        }
    }, false)
}

function countA3(data) {
    let inpNumberA3 = document.querySelector('#number-a3'),
        radioSideA3One = document.querySelector('#a3-one'),
        radioSideA3Two = document.querySelector('#a3-two'),
        selectDenA3 = document.querySelector('#select-a3'),
        spanResult = document.querySelector('#result');
    spanResult.innerHTML = '0';
    inpNumberA3.value = '';

    inpNumberA3.addEventListener('change', function () {
        getResultA3();
    }, false)

    selectDenA3.addEventListener('change', function () {
        getResultA3();
    }, false)

    radioSideA3One.addEventListener('change', function () {
        getResultA3();
    }, false)

    radioSideA3Two.addEventListener('change', function () {
        getResultA3();
    }, false)

    function getResultA3() {
        if (selectDenA3.value == 'den-90') {
            if (radioSideA3One.checked) {
                if (inpNumberA3.value > 0 && inpNumberA3.value < 100) {
                    spanResult.innerHTML = data.priсeA3.den90side1num100 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 100 && inpNumberA3.value < 200) {
                    spanResult.innerHTML = data.priсeA3.den90side1num200 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 200 && inpNumberA3.value < 300) {
                    spanResult.innerHTML = data.priсeA3.den90side1num300 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 500 && inpNumberA3.value < 1000) {
                    spanResult.innerHTML = data.priсeA3.den90side1num500 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 1000) {
                    spanResult.innerHTML = data.priсeA3.den90side1num1000 * inpNumberA3.value;
                }
            } else if (radioSideA3Two.checked) {
                if (inpNumberA3.value > 0 && inpNumberA3.value < 100) {
                    spanResult.innerHTML = data.priсeA3.den90side2num100 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 100 && inpNumberA3.value < 200) {
                    spanResult.innerHTML = data.priсeA3.den90side2num200 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 200 && inpNumberA3.value < 300) {
                    spanResult.innerHTML = data.priсeA3.den90side2num300 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 500 && inpNumberA3.value < 1000) {
                    spanResult.innerHTML = data.priсeA3.den90side2num500 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 1000) {
                    spanResult.innerHTML = data.priсeA3.den90side2num1000 * inpNumberA3.value;
                }
            }
        } else if (selectDenA3.value == 'den-170') {
            if (radioSideA3One.checked) {
                if (inpNumberA3.value > 0 && inpNumberA3.value < 100) {
                    spanResult.innerHTML = data.priсeA3.den170side1num100 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 100 && inpNumberA3.value < 200) {
                    spanResult.innerHTML = data.priсeA3.den170side1num200 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 200 && inpNumberA3.value < 300) {
                    spanResult.innerHTML = data.priсeA3.den170side1num300 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 500 && inpNumberA3.value < 1000) {
                    spanResult.innerHTML = data.priсeA3.den170side1num500 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 1000) {
                    spanResult.innerHTML = data.priсeA3.den170side1num1000 * inpNumberA3.value;
                }
            } else if (radioSideA3Two.checked) {
                if (inpNumberA3.value > 0 && inpNumberA3.value < 100) {
                    spanResult.innerHTML = data.priсeA3.den170side2num100 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 100 && inpNumberA3.value < 200) {
                    spanResult.innerHTML = data.priсeA3.den170side2num200 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 200 && inpNumberA3.value < 300) {
                    spanResult.innerHTML = data.priсeA3.den170side2num300 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 500 && inpNumberA3.value < 1000) {
                    spanResult.innerHTML = data.priсeA3.den170side2num500 * inpNumberA3.value;
                } else if (inpNumberA3.value >= 1000) {
                    spanResult.innerHTML = data.priсeA3.den170side2num1000 * inpNumberA3.value;
                }
            }
        }
    }
}

function countVisitCards(data) {
    let radioBcSideOne = document.querySelector('#bc-one'),
        radioBcSideTwo = document.querySelector('#bc-two'),
        selectBcNum = document.querySelector('#select-bc'),
        spanResult = document.querySelector('#result');
    spanResult.innerHTML = '0';
    selectBcNum.value = '-'

    radioBcSideOne.addEventListener('change', function () {
        getResultBc();
    }, false)

    radioBcSideTwo.addEventListener('change', function () {
        getResultBc();
    }, false)

    selectBcNum.addEventListener('change', function () {
        getResultBc();
    }, false)

    function getResultBc() {
        if (radioBcSideOne.checked) {
            if (selectBcNum.value == 'num-100') {
                spanResult.innerHTML = data.priсeBusinessCards.side1num100 * 100;
            } else if (selectBcNum.value == 'num-200') {
                spanResult.innerHTML = data.priсeBusinessCards.side1num200 * 200;
            } else if (selectBcNum.value == 'num-300') {
                spanResult.innerHTML = data.priсeBusinessCards.side1num300 * 300;
            } else if (selectBcNum.value == 'num-500') {
                spanResult.innerHTML = data.priсeBusinessCards.side1num500 * 500;
            } else if (selectBcNum.value == 'num-1000') {
                spanResult.innerHTML = data.priсeBusinessCards.side1num1000 * 1000;
            }
        } else if (radioBcSideTwo.checked) {
            if (selectBcNum.value == 'num-100') {
                spanResult.innerHTML = data.priсeBusinessCards.side2num100 * 100;
            } else if (selectBcNum.value == 'num-200') {
                spanResult.innerHTML = data.priсeBusinessCards.side2num200 * 200;
            } else if (selectBcNum.value == 'num-300') {
                spanResult.innerHTML = data.priсeBusinessCards.side2num300 * 300;
            } else if (selectBcNum.value == 'num-500') {
                spanResult.innerHTML = data.priсeBusinessCards.side2num500 * 500;
            } else if (selectBcNum.value == 'num-1000') {
                spanResult.innerHTML = data.priсeBusinessCards.side2num1000 * 1000;
            }
        }
    }
}

function countFlyers1(data) {
    let radioFlyers1SideOne = document.querySelector('#fl1-one'),
        radioFlyers1SideTwo = document.querySelector('#fl1-two'),
        selectFlyers1Num = document.querySelector('#select-fl1-num'),
        selectFlyers1Den = document.querySelector('#select-fl1-den'),
        spanResult = document.querySelector('#result');
    spanResult.innerHTML = '0';
    selectFlyers1Num.value = '-';

    radioFlyers1SideOne.addEventListener('change', function () {
        getResultFlyers1();
    }, false)

    radioFlyers1SideTwo.addEventListener('change', function () {
        getResultFlyers1();
    }, false)

    selectFlyers1Num.addEventListener('change', function () {
        getResultFlyers1();
    }, false)

    selectFlyers1Den.addEventListener('change', function () {
        getResultFlyers1();
    }, false)

    function getResultFlyers1() {
        if (selectFlyers1Den.value == 'den-130') {
            if (radioFlyers1SideOne.checked) {
                if (selectFlyers1Num.value == 'num-100') {
                    spanResult.innerHTML = data.priceFlayers1.den130side1num100 * 100;
                } else if (selectFlyers1Num.value == 'num-200') {
                    spanResult.innerHTML = data.priceFlayers1.den130side1num200 * 200;
                } else if (selectFlyers1Num.value == 'num-300') {
                    spanResult.innerHTML = data.priceFlayers1.den130side1num300 * 300;
                } else if (selectFlyers1Num.value == 'num-500') {
                    spanResult.innerHTML = data.priceFlayers1.den130side1num500 * 500;
                } else if (selectFlyers1Num.value == 'num-1000') {
                    spanResult.innerHTML = data.priceFlayers1.den130side1num1000 * 1000;
                }
            } else if (radioFlyers1SideTwo.checked) {
                if (selectFlyers1Num.value == 'num-100') {
                    spanResult.innerHTML = data.priceFlayers1.den130side2num100 * 100;
                } else if (selectFlyers1Num.value == 'num-200') {
                    spanResult.innerHTML = data.priceFlayers1.den130side2num200 * 200;
                } else if (selectFlyers1Num.value == 'num-300') {
                    spanResult.innerHTML = data.priceFlayers1.den130side2num300 * 300;
                } else if (selectFlyers1Num.value == 'num-500') {
                    spanResult.innerHTML = data.priceFlayers1.den130side2num500 * 500;
                } else if (selectFlyers1Num.value == 'num-1000') {
                    spanResult.innerHTML = data.priceFlayers1.den130side2num1000 * 1000;
                }
            }
        } else if (selectFlyers1Den.value == 'den-170') {
            if (radioFlyers1SideOne.checked) {
                if (selectFlyers1Num.value == 'num-100') {
                    spanResult.innerHTML = data.priceFlayers1.den170side1num100 * 100;
                } else if (selectFlyers1Num.value == 'num-200') {
                    spanResult.innerHTML = data.priceFlayers1.den170side1num200 * 200;
                } else if (selectFlyers1Num.value == 'num-300') {
                    spanResult.innerHTML = data.priceFlayers1.den170side1num300 * 300;
                } else if (selectFlyers1Num.value == 'num-500') {
                    spanResult.innerHTML = data.priceFlayers1.den170side1num500 * 500;
                } else if (selectFlyers1Num.value == 'num-1000') {
                    spanResult.innerHTML = data.priceFlayers1.den170side1num1000 * 1000;
                }
            } else if (radioFlyers1SideTwo.checked) {
                if (selectFlyers1Num.value == 'num-100') {
                    spanResult.innerHTML = data.priceFlayers1.den170side2num100 * 100;
                } else if (selectFlyers1Num.value == 'num-200') {
                    spanResult.innerHTML = data.priceFlayers1.den170side2num200 * 200;
                } else if (selectFlyers1Num.value == 'num-300') {
                    spanResult.innerHTML = data.priceFlayers1.den170side2num300 * 300;
                } else if (selectFlyers1Num.value == 'num-500') {
                    spanResult.innerHTML = data.priceFlayers1.den170side2num500 * 500;
                } else if (selectFlyers1Num.value == 'num-1000') {
                    spanResult.innerHTML = data.priceFlayers1.den170side2num1000 * 1000;
                }
            }
        } else if (selectFlyers1Den.value == 'den-250') {
            if (radioFlyers1SideOne.checked) {
                if (selectFlyers1Num.value == 'num-100') {
                    spanResult.innerHTML = data.priceFlayers1.den250side1num100 * 100;
                } else if (selectFlyers1Num.value == 'num-200') {
                    spanResult.innerHTML = data.priceFlayers1.den250side1num200 * 200;
                } else if (selectFlyers1Num.value == 'num-300') {
                    spanResult.innerHTML = data.priceFlayers1.den250side1num300 * 300;
                } else if (selectFlyers1Num.value == 'num-500') {
                    spanResult.innerHTML = data.priceFlayers1.den250side1num500 * 500;
                } else if (selectFlyers1Num.value == 'num-1000') {
                    spanResult.innerHTML = data.priceFlayers1.den250side1num1000 * 1000;
                }
            } else if (radioFlyers1SideTwo.checked) {
                if (selectFlyers1Num.value == 'num-100') {
                    spanResult.innerHTML = data.priceFlayers1.den250side2num100 * 100;
                } else if (selectFlyers1Num.value == 'num-200') {
                    spanResult.innerHTML = data.priceFlayers1.den250side2num200 * 200;
                } else if (selectFlyers1Num.value == 'num-300') {
                    spanResult.innerHTML = data.priceFlayers1.den250side2num300 * 300;
                } else if (selectFlyers1Num.value == 'num-500') {
                    spanResult.innerHTML = data.priceFlayers1.den250side2num500 * 500;
                } else if (selectFlyers1Num.value == 'num-1000') {
                    spanResult.innerHTML = data.priceFlayers1.den250side2num1000 * 1000;
                }
            }
        }
    }
}

function countFlyers2(data) {
    let radioFlyers2SideOne = document.querySelector('#fl2-one'),
        radioFlyers2SideTwo = document.querySelector('#fl2-two'),
        selectFlyers2Num = document.querySelector('#select-fl2-num'),
        selectFlyers2Form = document.querySelector('#select-fl2-form'),
        selectFlyers2Den = document.querySelector('#select-fl2-den'),
        spanResult = document.querySelector('#result');
    spanResult.innerHTML = '0';
    selectFlyers2Num.value = '-';

    radioFlyers2SideOne.addEventListener('change', function () {
        getResultFlyers2();
    }, false)

    radioFlyers2SideTwo.addEventListener('change', function () {
        getResultFlyers2();
    }, false)

    selectFlyers2Num.addEventListener('change', function () {
        getResultFlyers2();
    }, false)

    selectFlyers2Form.addEventListener('change', function () {
        getResultFlyers2();
    }, false)

    selectFlyers2Den.addEventListener('change', function () {
        getResultFlyers2();
    }, false)

    function getResultFlyers2() {
        if (selectFlyers2Den.value == 'den-130') {
            if (radioFlyers2SideOne.checked) {
                if (selectFlyers2Form.value == 'form-a4') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A4num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A4num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A4num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A4num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A4num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a5') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A5num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A5num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A5num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A5num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A5num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a6') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A6num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A6num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A6num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A6num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den130side1A6num1000 * 1000;
                    }
                }
            } else if (radioFlyers2SideTwo.checked) {
                if (selectFlyers2Form.value == 'form-a4') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A4num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A4num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A4num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A4num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A4num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a5') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A5num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A5num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A5num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A5num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A5num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a6') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A6num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A6num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A6num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A6num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den130side2A6num1000 * 1000;
                    }
                }
            }
        }

        if (selectFlyers2Den.value == 'den-170') {
            if (radioFlyers2SideOne.checked) {
                if (selectFlyers2Form.value == 'form-a4') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A4num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A4num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A4num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A4num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A4num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a5') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A5num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A5num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A5num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A5num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A5num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a6') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A6num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A6num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A6num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A6num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den170side1A6num1000 * 1000;
                    }
                }
            } else if (radioFlyers2SideTwo.checked) {
                if (selectFlyers2Form.value == 'form-a4') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A4num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A4num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A4num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A4num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A4num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a5') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A5num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A5num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A5num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A5num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A5num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a6') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A6num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A6num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A6num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A6num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den170side2A6num1000 * 1000;
                    }
                }
            }
        }

        if (selectFlyers2Den.value == 'den-250') {
            if (radioFlyers2SideOne.checked) {
                if (selectFlyers2Form.value == 'form-a4') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A4num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A4num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A4num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A4num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A4num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a5') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A5num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A5num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A5num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A5num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A5num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a6') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A6num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A6num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A6num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A6num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den250side1A6num1000 * 1000;
                    }
                }
            } else if (radioFlyers2SideTwo.checked) {
                if (selectFlyers2Form.value == 'form-a4') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A4num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A4num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A4num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A4num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A4num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a5') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A5num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A5num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A5num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A5num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A5num1000 * 1000;
                    }
                } else if (selectFlyers2Form.value == 'form-a6') {
                    if (selectFlyers2Num.value == 'num-100') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A6num100 * 100;
                    } else if (selectFlyers2Num.value == 'num-200') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A6num200 * 200;
                    } else if (selectFlyers2Num.value == 'num-300') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A6num300 * 300;
                    } else if (selectFlyers2Num.value == 'num-500') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A6num500 * 500;
                    } else if (selectFlyers2Num.value == 'num-1000') {
                        spanResult.innerHTML = data.priceFlayers2.den250side2A6num1000 * 1000;
                    }
                }
            }
        }

    }
}

function countEuroBooklets(data) {
    let selectEuroNum = document.querySelector('#select-euro-num'),
        selectEuroDen = document.querySelector('#select-euro-den'),
        spanResult = document.querySelector('#result');
    spanResult.innerHTML = '0';
    selectEuroNum.value = '-';

    selectEuroDen.addEventListener('change', function () {
        getResultEuro();
    }, false)

    selectEuroNum.addEventListener('change', function () {
        getResultEuro();
    }, false)

    function getResultEuro() {
        if (selectEuroDen.value == 'den-130') {
            if (selectEuroNum.value == 'num-100') {
                alert ('dddd')
                spanResult.innerHTML = data.priceEurobooklet.den130num100 * 100;
            } else if (selectEuroNum.value == 'num-200') {
                spanResult.innerHTML = data.priceEurobooklet.den130num200 * 200;
            } else if (selectEuroNum.value == 'num-300') {
                spanResult.innerHTML = data.priceEurobooklet.den130num300 * 300;
            } else if (selectEuroNum.value == 'num-500') {
                spanResult.innerHTML = data.priceEurobooklet.den130num500 * 500;
            } else if (selectEuroNum.value == 'num-1000') {
                spanResult.innerHTML = data.priceEurobooklet.den130num1000 * 1000;
            }
        } else if (selectEuroDen.value == 'den-170') {
            if (selectEuroNum.value == 'num-100') {
                spanResult.innerHTML = data.priceEurobooklet.den170num100 * 100;
            } else if (selectEuroNum.value == 'num-200') {
                spanResult.innerHTML = data.priceEurobooklet.den170num200 * 200;
            } else if (selectEuroNum.value == 'num-300') {
                spanResult.innerHTML = data.priceEurobooklet.den170num300 * 300;
            } else if (selectEuroNum.value == 'num-500') {
                spanResult.innerHTML = data.priceEurobooklet.den170num500 * 500;
            } else if (selectEuroNum.value == 'num-1000') {
                spanResult.innerHTML = data.priceEurobooklet.den170num1000 * 1000;
            }
        } else if (selectEuroDen.value == 'den-250') {
            if (selectEuroNum.value == 'num-100') {
                spanResult.innerHTML = data.priceEurobooklet.den250num100 * 100;
            } else if (selectEuroNum.value == 'num-200') {
                spanResult.innerHTML = data.priceEurobooklet.den250num200 * 200;
            } else if (selectEuroNum.value == 'num-300') {
                spanResult.innerHTML = data.priceEurobooklet.den250num300 * 300;
            } else if (selectEuroNum.value == 'num-500') {
                spanResult.innerHTML = data.priceEurobooklet.den250num500 * 500;
            } else if (selectEuroNum.value == 'num-1000') {
                spanResult.innerHTML = data.priceEurobooklet.den250num1000 * 1000;
            }
        }
    }
} 