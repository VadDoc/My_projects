<?php
/**
 * The template for all-services-page
 * Template Name: Все услуги (родительская)
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_all-services_Page
 *
 * @package skgroup
 */

get_header();
?>


<div class="main">
    <?php get_sidebar( 'page-title' ); ?>
	<main class="site-main all-services-page bg-grey">
        <h2 class="title center"><?php the_field('serv-parent-text_1'); ?></h2>

        <div class="all-services-page-container pad-lr flex">
            <?php
                $page_children = new WP_Query(array(
                  'post_type' => 'page',
                  'post_parent' => get_the_ID() 
                )
                );
                 
                if($page_children->have_posts()) :
                  while($page_children->have_posts()): $page_children->the_post();
                ?>
                    <div class="item-box" style="background-image: url(<?php the_field('services-page-card-img'); ?>)">
                        <div class="dark flex">
                            <div class="content">
                                <h2><?php the_title(); ?></h2>
                                <p><?php the_excerpt(); ?></p>
                                <p><a href="<?php the_permalink();?>"><?php pll_e('Детальнее'); ?></a></p>
                            </div>

                        </div>
                    </div>
                <?php
                endwhile;
                endif; 
                wp_reset_query();
            ?>
        </div>
        <div class="all-services-page-chrono">
            <div class="dark">
                <div class="chrono pad-lr flex">
                    <div class="chrono-box">
                        <div class="chrono-box-num"><span id="all-services-chrono-1">0</span>+</div>
                        <div class="chrono-box-text"><?php the_field('serv-parent-text_2'); ?></div>
                    </div>
                    <div class="chrono-box">
                        <div class="chrono-box-num"><span id="all-services-chrono-2">0</span>+</div>
                        <div class="chrono-box-text"><?php the_field('serv-parent-text_3'); ?></div>
                    </div>
                    <div class="chrono-box">
                        <div class="chrono-box-num"><span id="all-services-chrono-3">0</span>+</div>
                        <div class="chrono-box-text"><?php the_field('serv-parent-text_4'); ?></div>
                    </div>
                    <div class="chrono-box">
                        <div class="chrono-box-num"><span id="all-services-chrono-4">0</span>+</div>
                        <div class="chrono-box-text"><?php the_field('serv-parent-text_5'); ?></div>
                    </div>
                </div>
            </div>
        </div>

	</main>
    <?php get_sidebar( 'get-consult' ); ?>

    <?php get_sidebar( 'order-form' ); ?>

</div>

<?php
get_footer();
