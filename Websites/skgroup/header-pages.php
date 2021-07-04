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
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<header id="masthead" class="site-header-pages">
		<div class="site-header">
		    <div class="header flex"  id="container-main-navigation">
		        <div class="menu-mobile-messengers">
		    	   <div class="menu-mobile-messengers-img"></div>
                   <div class="krest-messengers-img"></div>
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
		            </nav><!-- #site-navigation -->
		    	</div>
		    	<div class="header-3">
		    	   <img class="" src="<?php echo get_template_directory_uri() . '/images/search.png' ?>">
		    	</div>
		    	<div class="header-4 flex">
		    	    <img class="" src="<?php echo get_template_directory_uri() . '/images/fb.png' ?>">
		    	    <img class="" src="<?php echo get_template_directory_uri() . '/images/tele.png' ?>">
		    	</div>
		    	<div class="header-5">
		    		<p><a href="tel:+380664236041">+38 066 423 60 41</a></p>
		    		<p><a href="mailto:info@sk-group.kiev.ua">info@sk-group.kiev.ua</a></p>
		    	</div>
		    	<div id="menu-mobile-toggle">
		    	    <div class="hamburger-img"></div>
                    <div class="krest-img"></div>
                </div>
		    </div>
		</div>
		<div class="page-title">
			<h1><?php the_title(); ?></h1>
			
		</div>
		
	</header>
