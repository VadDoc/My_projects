<?php
/**
 * The template for about-page
 * Template Name: О нас
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_an_About_Page
 *
 * @package skgroup
 */

get_header();
?>

<div class="main">
	<main class="site-main">
        <?php get_sidebar( 'page-title' ); ?>
 
        <?php get_sidebar( 'get-consult' ); ?>
 
        <div class="about-page-1 flex pad-lr bg-grey">
           <div class="about-page-1-img">
               <img src="<?php the_field('about-logo'); ?>" alt="">
           </div>
           <div class="about-page-1-text">
               <h2 class="title left"><?php the_field('about-text-title'); ?></h2>
               <?php the_field('about-text'); ?>
           </div>
        </div>
        <?php the_content(); ?>

        <?php if( have_rows('about-why-we') ): ?>
            <div class="about-page-2 pad-lr bg-grey">
                <div class="about-page-2-title">
                   <h2 class="title left"><?php the_field('about-why-we-title'); ?></h2> 
                </div>
                <div class="about-page-2-box flex">
                    <?php while( have_rows('about-why-we') ): the_row(); ?>
            
                        <div class="card-why">
                            <div class="card-why-logo"></div>
                            <div class="card-why-title">
                                <h3><?php the_sub_field('about-why-we-name'); ?></h3>
                            </div>
                            <div class="card-why-text">
                                <?php the_sub_field('about-why-we-text'); ?><
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            </div>
        <?php endif; ?>


        <?php get_sidebar( 'instruments-image' ); ?>
        
        <?php get_sidebar( 'slider-about-us' ); ?>

        
        <div class="star-line center bg-grey">&#11088; &#11088; &#11088; &#11088; &#11088;</div>
        <div class="consult pad-lr">
            <div class="consult-box flex">
                <div class="consult-box-1 flex">
                    <h2><?php pll_e('ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ И ОЦЕНКУ ВАШЕГО ПРОЕКТА'); ?></h2>
                </div>
                <div class="consult-box-2">
                    <form class="form-service-order-btn">
                        <input type="hidden" value="<?php pll_e('Получить бесплатную консультацию и оценку проекта'); ?>" class="" />
                        <input type="button" class="" value="<?php pll_e('ПОЛУЧИТЬ'); ?>">
                        <input type="hidden" value="phone" class="" />
                    </form>
                </div>
            </div>
        </div>

	</main>
</div>

<?php get_sidebar( 'order-form' ); ?>


<?php
get_footer();
