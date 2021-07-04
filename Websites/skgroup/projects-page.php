<?php
/**
 * The template for about-page
 * Template Name: Проекты (родительская фотогалерея)
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_an_projects_Page
 *
 * @package skgroup
 */

get_header();
?>

<div class="main">
    <?php get_sidebar( 'page-title' ); ?>
	<main class="site-main projects-page pad-lr bg-grey">
        <div class="projects-page-1">
            <h2 class="title center"><?php the_field('project-page-title') ?></h2>
        </div>
        <div class="projects-page-slider">
            <?php get_sidebar( 'photo-gallery-preveiw' ); ?>
        </div>

        

	</main>
    <?php get_sidebar( 'get-consult' ); ?>
</div>

<?php get_sidebar( 'order-form' ); ?>


<?php
get_footer();
