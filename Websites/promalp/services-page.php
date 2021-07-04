<?php
/**
 * The template for services-page
 * Template Name: Услуги
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package promapl
 */

get_header();
?>

	<main id="primary" class="site-main">
        <?php if( have_rows('services') ): ?>		
    
            <div class="services-container-1">
                <div class="container services-container-1-box">
    
                    <?php while( have_rows('services') ): the_row(); 
                       $servicesName1 = get_sub_field('services_name_1');
                       $servicesName2 = get_sub_field('services_name_2');
                       $servicesLogo = get_sub_field('services_logo');
                       $servicesLink = get_sub_field('services_logo');
                    ?>
    
                    <a href="<?php echo $servicesLink; ?>">
                    <div class="services-container-1-content">
                        <div class="services-container-1-content-top">
                            <?php if( $servicesLogo ): ?>
                               <img class="services-container-1-content-top-img" src="<?php echo $servicesLogo; ?>" />
                            <?php endif; ?>
                        </div>
                        <div class="services-container-1-content-bottom">
                            <?php echo $servicesName1; ?><br><?php echo $servicesName2; ?>
                        </div>
                    </div>
                    </a>    
    
                    <?php endwhile; ?>
    
    
                </div>
            </div>
        <?php endif; ?>				

        <div class="services-container-2">
            <div class="container">
            <div class="services-container-2-title">
                <h1><?php wp_title(' '); ?></h1>
            </div>
            <div class="services-container-2-content">
                <?php while ( have_posts() ){
		         the_post(); ?>
		         <div class="">
		     	  <?php the_content(); ?>
		     	</div>
                <?php }; ?>

            </div>
            </div>
        </div>


    </main>
    
<?php
get_footer();
