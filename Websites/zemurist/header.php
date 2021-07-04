<?php
/**
 * The header for our theme
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package zemurist
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <!-- <script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/download.js"></script> -->
	<?php wp_head(); ?>
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-P2W9SD1NXJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P2W9SD1NXJ');
</script>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

	<header id="masthead" class="site-header">
        <div class="container-main-navigation" id="container-main-navigation">

            <div id="menu-mobile-toggle">
                 <img class="hamburger-img" src="<?php echo get_template_directory_uri() . '/images/hamburger.png' ?>">
                 <img class="krest-img" src="<?php echo get_template_directory_uri() . '/images/krest1.png' ?>">
            </div>

    	    <div class="container-fluid">

                <div class="top-header">
                    <div class="container top-links">
                        <?php if( have_rows('social_networks_header') ): ?>
                            <div class="top-links-left">
                                <?php while( have_rows('social_networks_header') ): the_row(); 
                                	$socialNetworksHeaderLogo = get_sub_field('social_networks_header_logo');
                                	$socialNetworksHeaderLink = get_sub_field('social_networks_header_link');
				        		?>
                                   <a href="<?php echo $socialNetworksHeaderLink; ?>"><img class="top-links-left-logo" src="<?php echo $socialNetworksHeaderLogo ?>"></a>
                                <?php endwhile; ?>
                            </div>
                        <?php endif; ?>
        
                        <?php if( have_rows('social_networks_header', 6) ): ?>
                            <div class="top-links-left">
                                <?php while( have_rows('social_networks_header', 6) ): the_row(); ?>
                                   <a href="<?php the_sub_field('social_networks_header_link', 6); ?>" title="<?php the_sub_field('social_networks_header_name', 6); ?>"><img class="top-links-left-logo" src="<?php the_sub_field('social_networks_header_logo', 6); ?>"></a>
                                <?php endwhile; ?>
                            </div>
                        <?php endif; ?>

                        <a href="/#consult">
                            <div class="top-links-right"><?php if( the_field('get_consult', 6) ); ?></div>
                        </a>
                    </div>
                </div>

                <div class="bottom-header" id="sticky-navbar">
                    <div class="container">
                        <div class="header-contacts">
                            <a href="/" title="Главная страница">
                                <div class="header-contacts-1">
                                    <div class="header-contacts-1-logo">
                                        <?php if( get_field('logotip_1', 6) ): ?>
                                            <img class="header-contacts-1-logo-img" src="<?php the_field('logotip_1', 6); ?>" />
                                        <?php endif; ?>
                                    </div>
                                    <div class="header-contacts-1-content"><?php if( the_field('site_name_1', 6) ); ?><br><?php if( the_field('site_name_2', 6) ); ?></div>
                                </div>
                            </a>
                            <div class="header-contacts-2">
                                <div class="header-contacts-2-logo">
                                    <a href="/kontakty#map">
                                        <?php if( get_field('adress_img', 6) ): ?>
                                            <img class="header-contacts-2-logo-img" src="<?php the_field('adress_img', 6); ?>" />
                                        <?php endif; ?>
                                    </a>
                                </div>
                                <div class="header-contacts-2-content">
                                    <div><span class="font-bold"><?php the_field('address_name', 6); ?></span></div>
                                    <div><?php the_field('city', 6); ?></div>
                                    <div><?php the_field('street', 6); ?></div>
                                    <div><?php the_field('num-building', 6); ?><?php the_field('num-office', 6); ?></div>
                                </div>
                            </div>
                            <div class="header-contacts-3">
                                <div class="header-contacts-3-logo">
                                    <a href="tel:<?php the_field('telephone-1', 6); ?>">
                                       <?php if( get_field('phone_img', 6) ): ?>
                                            <img class="header-contacts-3-logo-img" src="<?php the_field('phone_img', 6); ?>" />
                                       <?php endif; ?>
                                    </a>
                                </div>
                                <div class="header-contacts-3-content">
                                    <div><span class="font-bold"><?php the_field('phone_name', 6); ?></span></div>
                                    <div><?php the_field('telephone-1', 6); ?></div>
                                    <div><?php the_field('telephone-2', 6); ?></div>
                                </div>
                            </div>
           
                            <?php if( have_rows('messengers', 6) ): ?>
                                <div class="header-contacts-4">
                                    <?php while( have_rows('messengers', 6) ): the_row(); ?>
                                        <a href="<?php the_sub_field('messenger_link', 6); ?>" target="_blank" title="<?php the_sub_field('messenger_name', 6); ?>"><img class="header-contacts-logo" src="<?php the_sub_field('messenger_logo', 6); ?>"></a>
                                    <?php endwhile; ?>
                                </div>
                            <?php endif; ?>
                        </div>

                        <!-- <nav id="site-navigation" class="container-menu">
    	               		<?php
    	               		    wp_nav_menu(
    	               		    	array(
    	               		    		'theme_location' => 'menu-1',
    	               		    		'menu_id'        => 'primary-menu',
    	               		    	)
    	               		    );
    	               		?>
                        </nav> -->
                    </div>
                </div>
            </div>
       
            <div class="menu-mobile-messengers">
                <img class="menu-mobile-messengers-img" src="<?php echo get_template_directory_uri() . '/images/phone.png' ?>">
                <img class="krest-messengers-img" src="<?php echo get_template_directory_uri() . '/images/krest1.png' ?>">
            </div>

        </div>
  </header>  




  