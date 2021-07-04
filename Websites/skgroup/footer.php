<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package skgroup
 */
?>

	<footer id="colophon" class="footer">
		<div class="footer-1 flex pad-lr">
			<div class="footer-1-1">
				<div class="footer-1-1-img">
				    <img class="" src="<?php echo get_template_directory_uri() . '/images/skgroup-logo-2.png' ?>">
				</div>
				<div class="footer-1-1-text"><p><?php pll_e('Footer: Текст о Компании'); ?></p></div>
			</div>
			<div class="footer-1-2">
				<h3 class="title"><?php pll_e('услуги'); ?></h3>
				<nav id="" class="footer-menu">
		        	<?php
		        	wp_nav_menu(
		        		array(
		        			'theme_location' => 'menu-2',
		        			'menu_id'        => 'footer-menu',
		        		)
		        	);
		        	?>
		        </nav><!-- #site-navigation -->

			</div>
			<div class="footer-1-3">
				<h3 class="title"><?php pll_e('контакты'); ?></h3>
				<p>
				    <?php pll_e('адрес'); ?><br>
				    <?php pll_e('Время работы 1'); ?><br>
				    <?php pll_e('Время работы 2'); ?><br>
				    <a href="tel:<?php the_field('phone', 'option'); ?>"><?php the_field('phone', 'option'); ?></a><br>
				    E-mail: <a href="mailto:<?php the_field('email', 'option'); ?>"><?php the_field('email', 'option'); ?></a><br>
				</p>
			</div>
        </div><!-- .footer-1 -->
		<div class="footer-2 center">
		© Copyright 2018 SK GROUP - All Rights Reserved<br>
		<!-- Разработка сайта <a href="">Компания</a> -->
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
