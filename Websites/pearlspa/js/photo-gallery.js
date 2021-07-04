window.addEventListener('load', previewHanler, false);

function previewHanler() {
    let previewItems = document.querySelectorAll('.preview-item');
    let galleryNames = document.querySelectorAll('.gallery-name');


    for (let i = 0; i < previewItems.length; i++) {
        previewItems[i].addEventListener('click', function() {
            showGallery(i)
        })
    }

    for (let i = 0; i < galleryNames.length; i++) {
        galleryNames[i].addEventListener('click', function() {
            showGallery(i)
        })
    }
}

function showGallery(num) {
    let galeryImgs = document.querySelectorAll('.gallery-item');
    let galeryTitles = document.querySelectorAll('.gallery-item-titles');
    let controlContainer = document.querySelector('.control-container');
    let arrowLeft = document.querySelector('.arrow-control-left');
    let arrowRight = document.querySelector('.arrow-control-right');
    let body = document.querySelector('body')

    body.style.overflow = 'hidden';
    let imgs = galeryImgs[num].children;
    let titles = galeryTitles[num].children;

    galeryImgs[num].style.display = 'flex';
    galeryTitles[num].style.display = 'flex';
    if(imgs.length > 1) controlContainer.style.display = 'block';  

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; 
        imgs[0].style.display = 'block';

        let widthImg = imgs[0].offsetWidth;
        let width = document.body.offsetWidth;

        arrowLeft.style.left = (width - widthImg)/2 + 15 + "px";
        arrowRight.style.right = (width - widthImg)/2 + 15 + "px"
    }

    for (let i = 0; i < titles.length; i++) {
        titles[i].style.display = 'none'; 
        titles[0].style.display = 'block'; 
    }


    galeryImgs[num].addEventListener('click', function(e) {
        if (!e.target.matches('.gallery-item-img')) {
            this.style.display = 'none';
            body.style.overflow = 'scroll';
            controlContainer.style.display = 'none'; 

            for (let i = 0; i < galeryImgs.length; i++) {
                galeryImgs[i].style.display = 'none'; 
            }

            for (let i = 0; i < galeryTitles.length; i++) {
                galeryTitles[i].style.display = 'none'; 
            }

            for (let i = 0; i < imgs.length; i++) {
                imgs[i].style.display = 'none'; 
            }

            for (let i = 0; i < titles.length; i++) {
                titles[i].style.display = 'none'; 
            }
        }
    })

    showGalleryInages(imgs, titles)
}

function showGalleryInages(imgs, titles) {
    let arrowLeft = document.querySelector('.arrow-control-left');
    let arrowRight = document.querySelector('.arrow-control-right');

    let a = 0;
    let b = 0;

    arrowLeft.addEventListener('click', function() {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
        }
        a--;
        if (a == -1) a = imgs.length - 1;
        imgs[a].style.display = 'block';
        widthImg = imgs[a].offsetWidth;
        width = document.body.offsetWidth;
        arrowLeft.style.left = (width - widthImg)/2 + 15 + "px";
        arrowRight.style.right = (width - widthImg)/2 + 15 + "px"

        for (let i = 0; i < titles.length; i++) {
            titles[i].style.display = 'none';
        }
        b--;
        if (b == -1) b = titles.length - 1;
        titles[b].style.display = 'block';
    })

    arrowRight.addEventListener('click', function() {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
        }
        a++;
        if (a == (imgs.length)) a = 0;
        imgs[a].style.display = 'block';
        widthImg = imgs[a].offsetWidth;
        width = document.body.offsetWidth;
        arrowLeft.style.left = (width - widthImg)/2 + 15 + "px";
        arrowRight.style.right = (width - widthImg)/2 + 15 + "px"


        for (let i = 0; i < titles.length; i++) {
            titles[i].style.display = 'none';
        }
        b++;
        if (b == (titles.length)) b = 0;
        titles[b].style.display = 'block';
    })
}