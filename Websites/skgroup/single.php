<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package skgroup
 */

get_header();
?>

<div class="main">
	<main id="primary" class="site-main single-page pad-lr bg-grey flex">
		<div class="single-page-1">
			<div class="single-page-1-post">
	            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		            <div class="post-image"><?php the_post_thumbnail();?></div>
		            <div class="posr-title">
		                <h1 class="title left"><?php the_title(); ?></h1>
		            </div>
        
		            <div class="post-content content">
		            	<?php the_content(); ?>
		            </div>
		        <?php endwhile; 
                endif; ?>
			</div>
			<div class="single-page-1-comments">
                <?php comments_template(); ?>
			</div>
		</div>
		<div class="single-page-2">
		    <?php get_sidebar( 'categories' ); ?>
		</div>
	</main>
</div>



<?php
get_footer();
