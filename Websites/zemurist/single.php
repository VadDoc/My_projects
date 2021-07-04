<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package zemurist
 */



get_header('simple');
?>

	<div class="container content-contact">
	     <div class="content-contact-left">
             <h1><?php wp_title(); ?></h1>
         </div>
         <?php while ( have_posts() ){
	          the_post(); ?>
	     <div class="user-content">
	      <?php the_content(); ?>
	     </div>
         <?php }; ?>
	</div>
<?php
get_footer();
