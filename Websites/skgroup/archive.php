<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package skgroup
 */

get_header();
?>

<div class="main">

	<main id="primary" class="site-main archive-page pad-lr bg-grey flex">
		<div class="archive-page-1">Категории
		</div>
		<div class="archive-page-2">
		    <?php get_sidebar( 'categories' ); ?>
		</div>
	</main>
</div>



<?php
get_footer();
