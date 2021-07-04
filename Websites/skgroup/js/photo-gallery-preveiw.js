window.addEventListener('load', getPhotoElems, false);

function getPhotoElems() {
    let menuItems = document.querySelectorAll('.gallery-menu-item');

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
