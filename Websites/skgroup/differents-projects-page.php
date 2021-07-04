<?php
/**
 * The template for differents-projects-page
 * Template Name: Различные проекты
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_an_differents-projects_Page
 *
 * @package skgroup
 */

get_header();
?>

<div class="main">
    <div class="page-title" style="background-image: url(<?php the_field('diff-projects-background'); ?>); height: 475px;">
        <div class="page-title-dark dark pad-lr">
            <div>
                <h1 class="title left"><?php the_title(); ?></h1>
                <?php breadcrumbs(); ?>
            </div>
        </div>
    </div>
    
	<main class="site-main diff-projects-page bg-grey">
        <?php if( have_rows('diff-projects-gallery') ): ?>
            <div class="diff-projects-page-container pad-lr">
                <div class="gallery-slider gallery-container">
                    <div class="gallery-slider-wrapper">
                        <?php while( have_rows('diff-projects-gallery') ): the_row(); ?>
                        <div class="gallery-slider-item img-gallery-0 img-gallery-1">
                          <img src="<?php the_sub_field('diff-projects-gallery-img'); ?>" alt="">
                        </div>
                        <?php endwhile; ?>
                    </div>
                    <a class="gallery-slider-control gallery-slider-control-left" href="#" role="button"></a>
                    <a class="gallery-slider-control gallery-slider-control-right gallery-slider-control-show" href="#" role="button"></a>
                </div>
                <div class="diff-projects-page-detals flex">
                    <div><?php the_field('diff-projects-detals'); ?></div>
                </div>
            </div>
        <?php endif; ?>

        <?php get_sidebar( 'get-consult' ); ?>

	</main>
    <?php get_sidebar( 'order-form' ); ?>

</div>

<?php
get_footer();
