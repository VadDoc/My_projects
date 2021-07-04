	window.onscroll = function() {
    let clientWidth = document.body.clientWidth
    switch (true) {
        case clientWidth > 991:
            window.addEventListener('scroll', getStucky);
            let navbar = document.getElementById("sticky-navbar");
            let sticky = navbar.getBoundingClientRect().top;
            function getStucky() {
              if (window.pageYOffset > (sticky + 50)) {
                navbar.classList.add("sticky")
              } else {
                navbar.classList.remove("sticky");
              }
            }
        }
    }

