<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package promapl
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="container">
			<div class="footer-container flex">
				<div class="footer-container-1">
				    <a href="/#"><img class="footer-container-1-img" src="<?php echo get_template_directory_uri() . '/images/layer-26.png' ?>"></a>
				</div>
				<div class="footer-container-2">
				    <nav>
    	      	        <?php
    	      	        wp_nav_menu(
    	      	        	array(
    	      	        		'theme_location' => 'menu-footer',
    	      	        		'menu_id'        => 'footer-menu',
    	      	        	)
    	      	        );
    	      	        ?>
    	            </nav>
				</div>
				<div class="footer-container-3">
					<div class="footer-container-3-top">
						<div class="footer-container-3-top-content flex">
						     <div class="footer-container-3-top-content-left">
						         <?php if( get_field('address_img', 24) ): ?>
                                    <img class="footer-container-3-top-content-left-img" src="<?php the_field('address_img', 24); ?>" />
                                 <?php endif; ?>
						     </div>
						     <div class="footer-container-3-top-content-right">
						     	<div class="footer-container-3-top-content-right-top"><?php the_field('city', 24); ?></div>
						     	<div class="footer-container-3-top-content-right-bottom"><?php the_field('address', 24); ?></div>
						     </div>
						</div>
					</div>
					<div class="footer-container-3-bottom">
						<div class="footer-container-3-bottom-content flex">
						     <div class="footer-container-3-bottom-content-left">
						         <?php if( get_field('phone_img', 24) ): ?>
                                    <img class="footer-container-3-bottom-content-left-img" src="<?php the_field('phone_img', 24); ?>" />
                                 <?php endif; ?>
						     </div>
						     <div class="footer-container-3-bottom-content-right">
						     	<div class="footer-container-3-bottom-content-right-top"><?php the_field('phone_1', 24); ?></div>
						     	<div class="footer-container-3-bottom-content-right-bottom"><?php the_field('phone_2', 24); ?></div>
						     </div>
						</div>
					</div>

				</div>
				<div class="footer-container-4 flex">
					<div class="footer-container-4-top">
						<div class="footer-container-4-top-top"><?php the_field('social_networks_title', 24); ?></div>
						<div class="footer-container-4-top-bottom flex">
						    <?php if( have_rows('social_networks', 24) ): ?>
                                    <?php while( have_rows('social_networks', 24) ): the_row(); ?>
									   <a href="<?php the_sub_field('social_networks_link', 24); ?>" title="<?php the_sub_field('social_networks_name', 6); ?>">
									   <img class="footer-container-4-top-bottom-logo" src="<?php the_sub_field('social_networks_logo', 24); ?>"></a>
                                    <?php endwhile; ?>
                            <?php endif; ?>

						</div>
					</div>
					<!-- <div class="footer-container-4-bottom">(с) 2020 promalpgroup</div> -->
				</div>
				<div class="footer-container-5">(с) 2020 promalpgroup</div>
			</div>
		</div>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
