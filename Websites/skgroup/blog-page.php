<?php
/**
 * The template for blog-page
 * Template Name: Блог
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_an_blog_Page
 *
 * @package skgroup
 */

get_header();
?>


<div class="main">
    <?php get_sidebar( 'page-title' ); ?>

	<main id="primary" class="site-main blog-page pad-lr bg-grey flex">
		<div class="blog-page-1 flex">

             <?php
             global $post;
             $postslist = get_posts( array( 'posts_per_page' => 10, 'order'=> 'DESC', 'orderby' => 'title' ) );
             foreach ( $postslist as $post ){
             	setup_postdata($post);
            ?>
				 <div class="blog-card">
					 <div class="blog-card-img">
					    <?php echo get_the_post_thumbnail(); ?>
					 </div>
				     <div class="blog-card-content">
				    	 <p><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></p>
				    	 <p><?php the_excerpt(); ?></p>
				     </div>
				 </div>
            <?php
             }
             wp_reset_postdata(); ?>

        
		</div>
		<div class="blog-page-2">
		    <?php get_sidebar( 'categories' ); ?>
		</div>
	</main>
</div>

</div>



<?php
get_footer();
