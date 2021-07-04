window.addEventListener("load", getSise);
    
function getSise() {
  let clientWidth = document.body.clientWidth

    if (clientWidth < 1000) {
        // loadScript('<?php echo esc_url( get_template_directory_uri() ); ?>/js/screen_mobile.js', function() {
        //     mobileFunc();
        //   });  
          
          loadScript('http://uristnet.s55.yourdomain.com.ua/wp-content/themes/zemurist/js/screen_mobile.js', function() {
            mobileFunc();
          });   
    }
}

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  
    document.head.append(script);
  }
