window.addEventListener('load', checkScreenSize);

function checkScreenSize() {
    let clientWidth = document.body.clientWidth
    switch (true) {
        case clientWidth < 1061:
            menu();
    }
}

function menu() {
    let menuMobileToggle = document.querySelector('.menu-mobile-toggle');
    let siteNavigation = document.querySelector('#site-navigation-mobile');
    let krestImg = document.querySelector('.krest-img');
    let hamburgerImg = document.querySelector('.hamburger-img');
 
    let messangers = document.querySelector('.search-sidebar'); 
    let menuMobileMessengers = document.querySelector('.menu-mobile-search');
    let mobileMessengersImg = document.querySelector('.search-img');
    let krestMessImg = document.querySelector('.krest-search-img');
    
 
    menuMobileMessengers.addEventListener('click', showMenuMess, false);
 
    function showMenuMess() {
        messangers.style.display = 'flex';
        krestMessImg.style.display = 'block';
        mobileMessengersImg.style.display = 'none';
        menuMobileMessengers.removeEventListener('click', showMenuMess, false);
        menuMobileMessengers.addEventListener('click', hideMenuMess, false);
        hideMenu()
     }
    
     function hideMenuMess() {
        messangers.style.display = 'none';
        krestMessImg.style.display = 'none';
        mobileMessengersImg.style.display = 'block';
        menuMobileMessengers.removeEventListener('click', hideMenuMess, false);
        menuMobileMessengers.addEventListener('click', showMenuMess, false);
     }
 
    menuMobileToggle.addEventListener('click', showMenu, false)
 
    function showMenu() {
       siteNavigation.style.display = 'flex';
       krestImg.style.display = 'block';
       hamburgerImg.style.display = 'none';
       menuMobileToggle.removeEventListener('click', showMenu, false);
       menuMobileToggle.addEventListener('click', hideMenu, false);
       hideMenuMess()
    }
 
     function hideMenu() {
       siteNavigation.style.display = 'none';
       krestImg.style.display = 'none';
       hamburgerImg.style.display = 'block';
       menuMobileToggle.removeEventListener('click', hideMenu, false);
       menuMobileToggle.addEventListener('click', showMenu, false)
    }

    startMenu()
 }
 

function startMenu() {
    let parents = document.querySelectorAll('.menu-item-has-children')
    console.log(parents.length);

    for (let i = 0; i < parents.length; i++) {
        let div = document.createElement('div')
        parents[i].append(div);
        div.setAttribute('class', 'arrow');
        div.classList.add('arrow-right');
        // parents[i].innerHTML += `<div class="arrow"></div>`
    }

    let arrows = document.querySelectorAll('.arrow')
    console.log(arrows.length);

    for (let i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', show, false)
    }
}

function show(e) {
    this.previousElementSibling.style.display = 'block'; 
    // this.previousElementSibling.style.
    this.removeEventListener('click', show, false);
    this.addEventListener('click', hide, false);
    this.classList.remove('arrow-right');
    this.classList.add('arrow-bottom')
}

function hide(e) {
    this.previousElementSibling.style.display = 'none'; 
    this.removeEventListener('click', hide, false);
    this.addEventListener('click', show, false);
    this.classList.remove('arrow-bottom');
    this.classList.add('arrow-right')
}

