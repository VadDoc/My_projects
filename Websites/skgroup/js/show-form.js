window.addEventListener('load', function() {
    handlerBtnShowForm('.form-service-order-btn', '.main-page-form');
    handlerBtnSearch(".search-btn", ".header-search-field")
}, false);

function handlerBtnShowForm(btnForm, div) {
    let btnForms = document.querySelectorAll(btnForm);

    for (let i = 0; i < btnForms.length; i++) {
        let aboutBtn = btnForms[i][0].value;
        let flag = btnForms[i][2].value;

        btnForms[i].addEventListener('click', function() {
            showForm(div, aboutBtn, flag);
        }, false)
    }
}

function showForm(div, aboutBtn, flag) { 
    let divForm = document.querySelector(div);
    let mailForm = document.querySelector('.order-form');
    divForm.style.display = 'flex';

    divForm.addEventListener('click', function(e) {
        if (e.target.matches(div)) {
            this.style.display = 'none';
        }
    })

    if(flag == 'phone') {
        mailForm[1].setAttribute('placeholder', 'Номер телефона');
        mailForm[2].style.display = 'none';
        mailForm[3].style.display = 'none';
        mailForm[7].value = 'phone';
    } 
}


function handlerBtnSearch(divBtnSearch, div) {
    let btnSearch = document.querySelector(divBtnSearch);
    btnSearch.addEventListener('click', function() {
        showSearchField(div);
    }, false)

}


function showSearchField(div) {
    let searchField = document.querySelector(div);
    searchField.style.display = 'flex';

    searchField.addEventListener('click', function(e) {
        if (e.target.matches(div)) {
            this.style.display = 'none';
        }
    })
}