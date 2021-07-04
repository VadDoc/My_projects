<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pearlspa
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	 <meta name="google-site-verification" content="sBRHXUpD2U3nCwwzfgz_QumV4A8d5nN8RA2Tae4spfA" />
	<link rel="shortcut icon" href="<?php bloginfo('stylesheet_directory'); ?>/favicon.ico" />


	<?php wp_head(); ?>
	<script>
      var gaq; 
      var _gaq = gaq || [];
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
     
      ga('create', 'UA-80735865-1', 'pearlspa.com.ua');
      ga('send', 'pageview');
     
    </script>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<header id="masthead" class="header">
		<!-- <div class="header-decor"></div> -->
		<div class="header-1">
			<div class="header-1-box flex">
				<div class="header-1-1">
			        <img class="" src="<?php echo get_template_directory_uri() . '/images/logo-white.png' ?>">
			    </div>
			    <div class="header-1-2">
					<div class="header-1-2-1">Мы ждем Вас</div>
					<div class="header-1-2-2">ежедневно с 9.00 до 21.00</div>
				</div>
			    <div class="header-1-3">
				    <div class="header-1-3-1">Киев, Голосеевский пр-т, 89</div>
					<div class="header-1-3-2"><a href="/kontakty/#contact">Посмотреть на карте</a></div>
				</div>
			    <div class="header-1-4">
				    <div class="header-1-4-1 flex">
						<div class="header-1-4-1-1 sprite"></div>
						<div class="header-1-4-1-2">
						    <img class="" src="<?php echo get_template_directory_uri() . '/images/viber-1.png' ?>">
						</div>
						<div class="header-1-4-1-3">067 465 01 70</div>
					</div>
					<div class="header-1-4-2">
					    <div class="callback-phone-header">
                            <form class="form-service-order-btn">
                                <input type="hidden" value="заказ обратного звонка" class="" />
                                <input type="hidden" value="Заказать обратный звонок" class="" />
                                <input type="button" class="call-button" value="Заказать обратный звонок">
                            </form>
                        </div>

					</div>
				</div>
			</div>
		</div>
		<div class="header-logo">
		    <a href="/"><img class="" src="<?php echo get_template_directory_uri() . '/images/logo_mail.png' ?>"></a>
		</div>
		<div class="header-slider">
    		<div class="slider-wrapper">
               <div class="slider-item">
    	           <img class="" src="<?php echo get_template_directory_uri() . '/images/slider/1.jpg' ?>">
			   </div>
			   <div class="slider-item">
    	           <img class="" src="<?php echo get_template_directory_uri() . '/images/slider/2.jpg' ?>">
               </div>
               <div class="slider-item">
    	           <img class="" src="<?php echo get_template_directory_uri() . '/images/slider/3.jpg' ?>">
               </div>
               <div class="slider-item">
    	           <img class="" src="<?php echo get_template_directory_uri() . '/images/slider/4.jpg' ?>">
               </div>
               <div class="slider-item">
    	           <img class="" src="<?php echo get_template_directory_uri() . '/images/slider/5.jpg' ?>">
               </div>
               <div class="slider-item">
    	           <img class="" src="<?php echo get_template_directory_uri() . '/images/slider/6.jpg' ?>">
               </div>
               <div class="slider-item">
    	           <img class="" src="<?php echo get_template_directory_uri() . '/images/slider/7.jpg' ?>">
               </div>
               <div class="slider-item">
    	           <img class="" src="<?php echo get_template_directory_uri() . '/images/slider/8.jpg' ?>">
               </div>
            </div>
            <a class="slider-control slider-control-left" href="#" role="button"></a>
            <a class="slider-control slider-control-right slider-control-show" href="#" role="button"></a>
		</div>
		<div class="header-menu">
		    <nav id="site-navigation" class="main-navigation">
		    	<?php
		    	wp_nav_menu(
		    		array(
		    			'theme_location' => 'menu-1',
		    			'menu_id'        => 'primary-menu',
		    		)
		    	);
		    	?>
		    </nav>
		</div>


		<div class="container-main-navigation-mobile">
            <div class="menu-mobile-search">
                <img class="search-img" src="<?php echo get_template_directory_uri() . '/images/search-kn.png' ?>">
                <img class="krest-search-img" src="<?php echo get_template_directory_uri() . '/images/krest1.png' ?>">
            </div>
            <nav id="site-navigation-mobile" class="container-menu">
			    <?php
		        	wp_nav_menu(
		        		array(
		        			'theme_location' => 'menu-6',
		        			'menu_id'        => 'mobile-menu',
		        		)
		        	);
		    	?>
			</nav>
			<a href="tel:+380674650170">
                <div class="phone flex">
			    	
			        <div class="header-1-4-1-1 sprite"></div>
			    	<div class="header-1-4-1-2">
			    	    <img class="" src="<?php echo get_template_directory_uri() . '/images/viber-1.png' ?>">
			    	</div>
			    	<div class="header-1-4-1-3">067 465 01 70</div>
                </div>
            </a>
            <div class="menu-mobile-toggle">
			    <img class="hamburger-img" src="<?php echo get_template_directory_uri() . '/images/menu-kn.png' ?>">
                <img class="krest-img" src="<?php echo get_template_directory_uri() . '/images/krest1.png' ?>">
            </div>
        </div> 

	</header>
