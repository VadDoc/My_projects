
<?php
/**
 * The template for about-page
 * Template Name: Прайс
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_an_prices_Page
 *
 * @package skgroup
 */

get_header();
?>

<div class="main">
    <?php get_sidebar( 'page-title' ); ?>
	<main class="site-main prices-page bg-grey">
        <div class="prices-page-1  pad-lr">

            <?php if( have_rows('table-prices') ): ?>
                <?php while( have_rows('table-prices') ): the_row(); ?>
                    <div class="accordion"><?php the_sub_field('title-table-prices'); ?></div>
                    <div class="panel">
                        <?php the_sub_field('table-table-prices'); ?>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>

        </div>
        <div class="prices-page-2 flex pad-lr">
            <div class="prices-page-2-1">
                <?php get_sidebar( 'mail-form' ); ?>
            </div>
            <div class="prices-page-2-2 content">
                <?php the_content(); ?>
            </div>
        </div>

        <?php get_sidebar( 'instruments-image' ); ?>

	</main>


</div>

<script>
    let acc = document.querySelectorAll(".accordion");
    
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
</script>


<?php
get_footer();
