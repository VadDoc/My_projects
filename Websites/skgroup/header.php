<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package skgroup
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

<link rel="icon" href="https://sk-group.kiev.ua/wp-content/uploads/2018/08/cb19516e-f538-4b42-83ec-7c84f5e5d4b5.png" sizes="32x32" />
<link rel="icon" href="https://sk-group.kiev.ua/wp-content/uploads/2018/08/cb19516e-f538-4b42-83ec-7c84f5e5d4b5.png" sizes="192x192" />
<link rel="apple-touch-icon-precomposed" href="https://sk-group.kiev.ua/wp-content/uploads/2018/08/cb19516e-f538-4b42-83ec-7c84f5e5d4b5.png" />
<meta name="msapplication-TileImage" content="https://sk-group.kiev.ua/wp-content/uploads/2018/08/cb19516e-f538-4b42-83ec-7c84f5e5d4b5.png" />
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMJRLBK');</script>

<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '301950877954101');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=301950877954101&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMJRLBK"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<header id="masthead" class="site-header">
		<div class="header flex pad-lr"  id="container-main-navigation">
		    <div class="menu-mobile-messengers">
			   <div class="menu-mobile-messengers-img"></div>
               <div class="krest-messengers-img"></div>

			   <!-- <img class="menu-mobile-messengers-img" src="<?php echo get_template_directory_uri() . '/images/phone.png' ?>">
			   <img class="krest-messengers-img" src="<?php echo get_template_directory_uri() . '/images/krest1.png' ?>"> -->
            </div>
			<div class="header-1">
			    <img class="" src="<?php echo get_template_directory_uri() . '/images/skgroup-logo-1.png' ?>">
			    
			</div>
			<div class="header-2">
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
			<div class="header-3">
			   <img class="search-btn" src="<?php echo get_template_directory_uri() . '/images/search.png' ?>">
			</div>
			<div class="header-4 flex">
			    <a href="https://www.instagram.com/skgroup_build" target="_blank"><img class="" src="<?php echo get_template_directory_uri() . '/images/instagram-gr.png' ?>"></a>
			    <a href="https://telegram.me/" target="_blank"><img class="" src="<?php echo get_template_directory_uri() . '/images/telegram-gr.png' ?>"></a>
			</div>
			<div class="header-5">
				<p><a href="tel:<?php the_field('phone', 'option'); ?>"><?php the_field('phone', 'option'); ?></a></p>
				<p><a href="mailto:<?php the_field('email', 'option'); ?>"><?php the_field('email', 'option'); ?></a></p>
			</div>
			<div id="menu-mobile-toggle">
			    <div class="hamburger-img"></div>
                <div class="krest-img"></div>

				<!-- <img class="hamburger-img" src="<?php echo get_template_directory_uri() . '/images/hamburger.png' ?>">
			    <img class="krest-img" src="<?php echo get_template_directory_uri() . '/images/krest1.png' ?>"> -->
            </div>
		</div>

		<div class="header-search-field">
		    <form role="search" method="get" class="search-form" action="#">
				<div class="header-search-field-title"><?php pll_e('Форма поиска'); ?></div>
	    	    <div class="header-search-field-1">
	    	    	<input type="search" class="search-field" placeholder="<?php pll_e('Введите ключевые слова'); ?>" value="" name="s" />
	    	    </div>
	    	    <div class="header-search-field-2 center">
	    	        <input type="submit" class="search-submit" value="<?php pll_e('Поиск'); ?>" />
	    	    </div>
	    	</form>

		</div>

	</header>
