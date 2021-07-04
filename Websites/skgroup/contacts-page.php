<?php
/**
 * The template for contacts-page
 * Template Name: Контакты
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_an_contacts_Page
 *
 * @package skgroup
 */

get_header();
?>

<div class="main">
<?php get_sidebar( 'page-title' ); ?>

	<main class="site-main contacts-page bg-grey">
        <div class="contacts-page-1 pad-lr flex">
            <div class="contacts-page-1-1">
                <h2 class="title"><?php the_field('contacts-page_1'); ?></h2>
                <!-- <p><?php the_field('contacts-page_2'); ?><p> -->
                <div class="contacts-page-1-1-box content">
                    <?php the_content(); ?>
                </div>

            </div>
            <div class="contacts-page-1-2">
                <h2 class="title"><?php the_field('contacts-page_3'); ?></h2>
                <!-- <p><?php the_field('contacts-page_4'); ?></p> -->
                <div class="contacts-page-1-box">
                    <?php get_sidebar( 'mail-form' ); ?>
                </div>

            </div>
        </div>
        <div class="contact-page-2">
            <iframe frameborder=0 scrolling=no marginheight=0 marginwidth=0 src="https://maps.google.com/maps?q=%D0%98%D1%80%D0%BF%D0%B5%D0%BD%D1%8C%2C%20%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%2094&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" aria-label="Ирпень, Садовая 94"></iframe>
        </div>
	</main>
    <?php get_sidebar( 'get-consult' ); ?>

</div>

<?php get_sidebar( 'order-form' ); ?>


<?php
get_footer();
