window.addEventListener('load', showGallerySlides, false);

function showGallerySlides() {
    let prev = document.querySelector('#slides-prev');
    let next = document.querySelector('#slides-next');

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
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");

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
        captionText.innerHTML = dots[slideIndex-1].alt;
    }
}