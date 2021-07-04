window.addEventListener('load', function () {
    let clientWidth = document.body.clientWidth;
    switch (true) {
        case clientWidth > 900:
            checkHeight(".repair-prices-text");
            checkHeight(".repair-prices-name");
    }

})


function checkHeight(div) {
    let elems = document.querySelectorAll(div);
    let maxHeight = 0;

    for (let i = 0; i < elems.length; i++) {
        let height = elems[i].offsetHeight;
        if(maxHeight - height < 0) maxHeight = height
    }

    for (let i = 0; i < elems.length; i++) {
        elems[i].style.minHeight = maxHeight + 'px'
    }
}