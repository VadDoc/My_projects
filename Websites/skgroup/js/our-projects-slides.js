window.addEventListener('load', function() {
    showGallerySlides('#slides-prev-1', '#slides-next-1', 'slides-1', 'demo-1');
    showGallerySlides('#slides-prev-2', '#slides-next-2', 'slides-2', 'demo-2');
    showGallerySlides('#slides-prev-3', '#slides-next-3', 'slides-3', 'demo-3');
}, false);

function showGallerySlides(divSlidesPrev, divSlidesNext, divSlides, divDemo) {
    let prev = document.querySelector(divSlidesPrev);
    let next = document.querySelector(divSlidesNext);

    prev.addEventListener('click', function() {
        plusSlides(1)
    })

    next.addEventListener('click', function() {
        plusSlides(-1)
    })




    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName(divSlides);
        let dots = document.getElementsByClassName(divDemo);


        for (let j = 0; j < dots.length; j++) {
            dots[j].addEventListener('click', function() {
                currentSlide(j+1)
            })
        }

        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
}