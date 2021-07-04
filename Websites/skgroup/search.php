<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package skgroup
 */

get_header();
?>
    <?php get_sidebar( 'search-title' ); ?>

	<main id="primary" class="site-main search-page bg-grey pad-lr">
		<?php if ( have_posts() ) : ?>
			<!-- <header class="page-header">
				<h1 class="page-title">
					<?php
					printf( esc_html__( 'Search Results for: %s', 'skgroup' ), '<span>' . get_search_query() . '</span>' );
					?>
				</h1>
			</header> -->
			<?php
			while ( have_posts() ) :
				the_post();
				get_template_part( 'template-parts/content', 'search' );
			endwhile;
			the_posts_navigation();
	    else :
			get_template_part( 'template-parts/content', 'none' );
		endif;
		?>
	</main><!-- #main -->

<?php
get_footer();
