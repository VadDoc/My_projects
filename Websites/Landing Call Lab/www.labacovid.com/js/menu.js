window.addEventListener('load', switchMenu, false);

function switchMenu() {
    let btnOpenMenu = document.querySelector('.container-menu-1-3');
    let btnHideMenu = document.querySelector('.container-menu-2-7');
    let menu1 = document.querySelector('.container-menu-1');
    let menu2 = document.querySelector('.container-menu-2');
    let text1 = document.querySelector('.container-menu-1-4');
    let text2 = document.querySelector('.container-menu-1-4 a');
    let btnCall = document.querySelector('.btn-header-1');
    let clientWidth = document.body.clientWidth;

    if (pageYOffset != 0) addWhite();
    else removeWhite();

    window.addEventListener('scroll', function() {
        if (pageYOffset != 0) addWhite();
        else removeWhite();
    })

    // function hoverEq0() {
    //     this.style.color = 'white';
    //     this.removeEventListener('mouseover', hoverEq0)
    //     this.addEventListener('mouseout', outEq0);
    // }

    // function outEq0() {
    //     this.style.color = 'rgb(48, 243, 233)';
    //     this.removeEventListener('mouseover', outEq0)
    //     this.addEventListener('mouseout', hoverEq0);
    // }


    btnOpenMenu.addEventListener('click', showMenu, false);

    function showMenu() {
        menu1.style.display = 'none';
        if (clientWidth > 800) menu2.style.display = 'flex';
        else menu2.style.display = 'block';
        btnHideMenu.addEventListener('click', hideMenu, false)
    }

    function hideMenu() {
        menu2.style.display = 'none';
        menu1.style.display = 'flex';
    }

    function addWhite() {
        menu1.style.backgroundColor = 'rgb(34, 206, 163)';
        text1.style.color ='white';
        text2.style.color ='white';
        // btnCall.style.color ='white';
        // btnCall.style.border = 'solid 3px white'
    }

    function removeWhite() {
        menu1.style.backgroundColor = 'transparent';
        text1.style.color ='gray';
        text2.style.color ='gray';
        // btnCall.style.color ='rgb(48, 243, 233)';
        // btnCall.style.border = 'solid 3px rgb(48, 243, 233)'
    }

}