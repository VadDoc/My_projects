// function initMobileMenu() {
//     alert('заработал новый скрипт')
// }


// window. addEventListener('load', initMobileMenu);

function initMobileMenu() {
    let containerMainNavigation = document.querySelector('#container-main-navigation');
    containerMainNavigation.className = "container-main-navigation-mobile";

    let menuMobileToggle = document.querySelector('#menu-mobile-toggle');
    let siteNavigation = document.querySelector('#site-navigation')
    let krestImg = document.querySelector('.krest-img');
    let hamburgerImg = document.querySelector('.hamburger-img');
    let messangers = document.querySelector('.top-header-container-4');
    let menuMobileMessengers = document.querySelector('.menu-mobile-messengers');
    let mobileMessengersImg = document.querySelector('.menu-mobile-messengers-img');
    let krestMessImg = document.querySelector('.krest-messengers-img');
 
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
    console.log(parents.length);

    for (let i = 0; i < parents.length; i++) {
        let div = document.createElement('div')
        parents[i].append(div);
        div.setAttribute('class', 'arrow');
        div.classList.add('arrow-right');
    }

    let arrows = document.querySelectorAll('.arrow')
    console.log(arrows.length);

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

