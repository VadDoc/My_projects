<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package zemurist
 */

?>

	<footer id="colophon">
	    <div class="container site-footer">
	    	<div class="footer-1">
	    		<div class="footer-1-logo">
               <?php if( get_field('logotip_2', 6) ): ?>
                   <img class="footer-1-img" src="<?php the_field('logotip_2', 6); ?>" />
               <?php endif; ?>
	    		</div>
	    		<div class="footer-1-text"><?php if( the_field('site_name_1', 6) ); ?><br><?php if( the_field('site_name_2', 6) ); ?></div>
	    	</div>
	    	<div class="footer-2">
              <nav>
    	      		<?php
    	      		wp_nav_menu(
    	      			array(
    	      				'theme_location' => 'footer-1',
    	      				'menu_id'        => 'footer-1-menu',
    	      			)
    	      		);
    	      		?>
    	        </nav>
	    	</div>
	    	<div class="footer-3">
              <nav>
    	      		<?php
    	      		wp_nav_menu(
    	      			array(
    	      				'theme_location' => 'footer-2',
    	      				'menu_id'        => 'footer-2-menu',
    	      			)
    	      		);
    	      		?>
    	        </nav>
	    	</div>
	    	<div class="footer-4">
	    		<div class="footer-4-top">
					<span class="font-bold"><?php the_field('phone_name', 6); ?></span><br><?php the_field('telephone-1', 6); ?><br><?php the_field('telephone-2', 6); ?>
				</div>
	    		<div class="footer-4-middle">
                     <span class="font-bold"><?php the_field('address_name', 6); ?></span><br>
                     <?php the_field('city', 6); ?><br>
                     <?php the_field('street', 6); ?><br>
                     <?php the_field('num-building', 6); ?><?php the_field('num-office', 6); ?>
				</div>
			</div>
			<div class="footer-5">
             <?php if( have_rows('social_networks_footer', 6) ): ?>
                <div class="footer-5-links">
                    <?php while( have_rows('social_networks_footer', 6) ): the_row(); ?>
                       <a href="<?php the_sub_field('social_networks_footer_link', 6); ?>" title="<?php the_sub_field('messenger_name', 6); ?>"><img class="footer-5-img" src="<?php the_sub_field('social_networks_footer_logo', 6); ?>"></a>
                    <?php endwhile; ?>
                </div>
             <?php endif; ?>
	    	</div>
		</div>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
