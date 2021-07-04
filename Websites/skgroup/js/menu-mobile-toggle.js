window.addEventListener('load', fixedHeader);

function fixedHeader() {

    window.addEventListener('scroll', function() {
        let coordTop = document.documentElement.scrollTop;
        let header = document.querySelector(".site-header");
    
        if (coordTop < 100) {
            header.classList.remove('time-transition');
            header.style.top = `-${coordTop}px`;
        } else {
            header.classList.add('time-transition');
            header.style.top = `0px`;
        }
    })

    checkScreenSize();
}

function checkScreenSize() {
    let clientWidth = document.body.clientWidth;
    switch (true) {
        case clientWidth < 1203:
            getMobileMenu();
    }
}

function getMobileMenu() {
    let containerMainNavigation = document.querySelector('#container-main-navigation');
    containerMainNavigation.className = "container-main-navigation-mobile";

    let menuMobileToggle = document.querySelector('#menu-mobile-toggle');
    let siteNavigation = document.querySelector('#site-navigation')
    let krestImg = document.querySelector('.krest-img');
    let hamburgerImg = document.querySelector('.hamburger-img');
 
    let messengers = document.querySelector('.header-4');
    let contacts = document.querySelector('.header-5');
    let messengersMobileToggle = document.querySelector('.menu-mobile-messengers');
    let phoneMessengersImg = document.querySelector('.menu-mobile-messengers-img');
    let krestMessImg = document.querySelector('.krest-messengers-img');
 
    messengersMobileToggle.addEventListener('click', showMenuMess, false);
 
    function showMenuMess() {
        messengers.style.display = 'flex';
        contacts.style.display = 'block';
        krestMessImg.style.display = 'block';
        phoneMessengersImg.style.display = 'none';
        messengersMobileToggle.removeEventListener('click', showMenuMess, false);
        messengersMobileToggle.addEventListener('click', hideMenuMess, false);
        hideMenu()
     }
    
     function hideMenuMess() {
        messengers.style.display = 'none';
        contacts.style.display = 'none';
        krestMessImg.style.display = 'none';
        phoneMessengersImg.style.display = 'block';
        messengersMobileToggle.removeEventListener('click', hideMenuMess, false);
        messengersMobileToggle.addEventListener('click', showMenuMess, false);
     }
 
    menuMobileToggle.addEventListener('click', showMenu, false)
 
    function showMenu() {
       siteNavigation.style.display = 'block';
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

    for (let i = 0; i < parents.length; i++) {
        let div = document.createElement('div')
        parents[i].append(div);
        div.setAttribute('class', 'arrow');
        div.classList.add('arrow-right');
    }

    let arrows = document.querySelectorAll('.arrow')

    for (let i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', show, false)
    }
}

function show(e) {
    this.previousElementSibling.style.display = 'block'; 
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

