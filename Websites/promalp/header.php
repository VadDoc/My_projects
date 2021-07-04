<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package promapl
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
	<!-- <header id="masthead" class="site-header">
	    <div class="container-main-navigation">
		    <div class="top-header">
		    	<div class="container">
		    		<div class="top-header-container flex">
		    			<div class="top-header-container-1">
						    <a href="/#"><img class="top-header-container-1-img" src="<?php echo get_template_directory_uri() . '/images/layer-26.png' ?>"></a>
						</div>
		    			<div class="top-header-container-2 flex">
							<div class="top-header-container-2-left">
							    <?php if( get_field('address_img', 24) ): ?>
                                   <img class="top-header-container-2-left-img" src="<?php the_field('address_img', 24); ?>" />
                                <?php endif; ?>
							</div>
							<div class="top-header-container-2-right">
								<div class="top-header-container-2-right-top"><?php the_field('city', 24); ?></div>
								<div class="top-header-container-2-right-bottom"><?php the_field('address', 24); ?></div>
							</div>
						</div>
		    			<div class="top-header-container-3 flex">
						    <div class="top-header-container-3-left">
							    <?php if( get_field('phone_img', 24) ): ?>
                                   <img class="top-header-container-3-left-img" src="<?php the_field('phone_img', 24); ?>" />
                                <?php endif; ?>
							</div>
							<div class="top-header-container-3-right">
								<div class="top-header-container-3-right-top"><?php the_field('phone_1', 24); ?></div>
								<div class="top-header-container-3-right-bottom"><?php the_field('phone_2', 24); ?></div>
							</div>
						</div>
		    			<div class="top-header-container-4">
						    <?php if( have_rows('messengers', 24) ): ?>
                                    <?php while( have_rows('messengers', 24) ): the_row(); ?>
									   <a href="<?php the_sub_field('messenger_link', 24); ?>" title="<?php the_sub_field('messenger_name', 6); ?>">
									   <img class="top-header-container-4-logo" src="<?php the_sub_field('messenger_logo', 24); ?>"></a>
                                    <?php endwhile; ?>
                            <?php endif; ?>
						</div>
		    			<div class="top-header-container-5">EN PL GR</div>
		    		</div>
		    	</div>
		    </div>
		    <div class="bottom-header">
		    	<div class="container">
		    		<div class="bottom-header-container flex">
		    		    <div class="bottom-header-container-1">
		    			    <nav>
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
		    			<div class="bottom-header-container-2">
						    <form role="search" method="get" class="search-form flex" action="http://promalp-group.com/">
							    <div class="bottom-header-container-2-left">
			                    	<input type="search" class="search-field" placeholder="" value="" name="s" />
							    </div>
							    <div class="bottom-header-container-2-right">
							        <input type="submit" class="search-submit" value="" />
							    </div>
							</form>
						</div>
		    		</div>
		    	</div>
		    </div>
		</div>

		<div class="container-main-navigation-mobile">
            <div id="menu-mobile-toggle">
                <img class="hamburger-img" src="<?php echo get_template_directory_uri() . '/images/yellow-hamburger.png' ?>">
                <img class="krest-img" src="<?php echo get_template_directory_uri() . '/images/krest1.png' ?>">
            </div>
            <nav id="site-navigation" class="container-menu">
			    <?php
    	         wp_nav_menu(
    	         	array(
    	         		'theme_location' => 'menu-1',
    	         		'menu_id'        => 'primary-menu',
    	         	)
    	        );
    	        ?>
             </nav>
             <div class="messangers">
					<a href="">мессенджеры</a>
             </div>
             <div class="menu-mobile-logo">
                <a href="/">
                   <img class="menu-mobile-logo-img" src="<?php echo get_template_directory_uri() . '/images/layer-26.png' ?>">
                </a>
             </div>
             <div class="menu-mobile-messengers">
                <img class="menu-mobile-messengers-img" src="<?php echo get_template_directory_uri() . '/images/black_phone.png' ?>">
                <img class="krest-messengers-img" src="<?php echo get_template_directory_uri() . '/images/krest1.png' ?>">
             </div>
        </div>

	</header> -->







	<header id="masthead" class="site-header">
	    <div class="container-main-navigation" id="container-main-navigation">
	    	<div class="top-header">
	    		<div id="menu-mobile-toggle">
				    <img class="hamburger-img" src="<?php echo get_template_directory_uri() . '/images/yellow-hamburger.png' ?>">
                    <img class="krest-img" src="<?php echo get_template_directory_uri() . '/images/krest-yellow.png' ?>">
				</div>
    
    
	    		<div class="container">
	    	    	<div class="top-header-container flex">
	    	    		<div class="top-header-container-1">
	    				    <a href="/#"><img class="top-header-container-1-img" src="<?php echo get_template_directory_uri() . '/images/layer-26.png' ?>"></a>
	    				</div>
	    	    		<div class="top-header-container-2 flex">
	    					<div class="top-header-container-2-left">
	    					    <?php if( get_field('address_img', 24) ): ?>
                                   <img class="top-header-container-2-left-img" src="<?php the_field('address_img', 24); ?>" />
                                <?php endif; ?>
	    					</div>
	    					<div class="top-header-container-2-right">
	    						<div class="top-header-container-2-right-top"><?php the_field('city', 24); ?></div>
	    						<div class="top-header-container-2-right-bottom"><?php the_field('address', 24); ?></div>
	    					</div>
	    				</div>
	    	    		<div class="top-header-container-3 flex">
	    				    <div class="top-header-container-3-left">
	    					    <?php if( get_field('phone_img', 24) ): ?>
                                   <img class="top-header-container-3-left-img" src="<?php the_field('phone_img', 24); ?>" />
                                <?php endif; ?>
	    					</div>
	    					<div class="top-header-container-3-right">
	    						<div class="top-header-container-3-right-top"><?php the_field('phone_1', 24); ?></div>
	    						<div class="top-header-container-3-right-bottom"><?php the_field('phone_2', 24); ?></div>
	    					</div>
	    				</div>
	    	    		<div class="top-header-container-4">
	    				    <?php if( have_rows('messengers', 24) ): ?>
                                    <?php while( have_rows('messengers', 24) ): the_row(); ?>
	    							   <a href="<?php the_sub_field('messenger_link', 24); ?>" title="<?php the_sub_field('messenger_name', 6); ?>">
	    							   <img class="top-header-container-4-logo" src="<?php the_sub_field('messenger_logo', 24); ?>"></a>
                                    <?php endwhile; ?>
                            <?php endif; ?>
	    				</div>
	    	    		<div class="top-header-container-5">EN PL GR</div>
	    	    	</div>
	    	    </div>
    
    
    
	    		<div class="menu-mobile-messengers">
				    <img class="menu-mobile-messengers-img" src="<?php echo get_template_directory_uri() . '/images/black_phone.png' ?>">
                    <img class="krest-messengers-img" src="<?php echo get_template_directory_uri() . '/images/krest-black.png' ?>">
				</div>
	    	</div>
    
    
    
	    	<div class="bottom-header">
	    		<div class="container">
	    			<div class="bottom-header-container flex">
	    			    <div class="bottom-header-container-1">
	    	    			    <nav id="site-navigation" class="container-menu">
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
	    				<div class="bottom-header-container-2">
	    					    <form role="search" method="get" class="search-form flex" action="http://promalp-group.com/">
	    						    <div class="bottom-header-container-2-left">
	    		                    	<input type="search" class="search-field" placeholder="" value="" name="s" />
	    						    </div>
	    						    <div class="bottom-header-container-2-right">
	    						        <input type="submit" class="search-submit" value="" />
	    						    </div>
	    						</form>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
    
    
	    </div>
	</header>
