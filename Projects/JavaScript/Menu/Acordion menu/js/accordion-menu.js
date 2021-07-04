window.addEventListener('load', initAccordionMenu, false);

function initAccordionMenu() {
    let acc = document.querySelectorAll(".menu-item-has-children");
    let ul = document.querySelectorAll(".menu-item-has-children ul");


    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = ul[i];
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
}


// Хорошо для одного уровня вложенности