<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package pearlspa
 */

get_header();
?>

<div class="main">
    	<main id="primary" class="site-main flex">
    		<div class="sidebar-left">
    		    <?php get_sidebar(); ?>
    		</div>
    		<div class="mainpage-main">
				<?php breadcrumbs(); ?>
				<div class="divider"></div>
				<div class="post-content search-page">
                       
				    <?php if ( have_posts() ) : ?>
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
                
				</div><!-- end post-content  -->
    		</div><!-- end mainpage-main  -->
    	</main>
    </div><!-- end main  -->

<?php
get_footer();



