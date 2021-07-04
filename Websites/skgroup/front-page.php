<?php
/**
 * The template for front-page
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package skgroup
 */

get_header('');
?>

<div class="main">
	<main class="site-main">

        <!--Главная картинка  -->
        <section class="main-large-bg">
            <div class="main-large-bg-1 center">
            <h1><?php the_field('main-represent-title'); ?></h1>
            <h2><?php the_field('main-represent-title-2'); ?></h2>
            </div>
            <div class="main-large-bg-2 center"><?php the_field('main-represent-text'); ?></</div>
            <div class="main-large-bg-3 center flex">
                <form class="form-service-order-btn">
                    <input type="hidden" value="Главная страница" class="" />
                    <input type="button" class="btn-show-form red" value="<?php pll_e('СВЯЗАТЬСЯ'); ?>">
                    <input type="hidden" value="phone" class="" />
                </form>

                <a href="#comments"><input type="button" value="<?php pll_e('ОТЗЫВЫ'); ?>"></a>
            </div>
        </section>

        <!-- последние работы -->
        <section class="main-last-work pad-lr">
            <h2 class="title center"><?php pll_e('ПОСЛЕДНИЕ РАБОТЫ'); ?></h2>
            <?php get_sidebar( 'photo-gallery-preveiw' ); ?>
            <p class="center"><a href="/proekty/">+ <?php pll_e('Еще портфолио'); ?></a></p>
        </section>


        <!-- Наши услуги -->
        <section class="main-services flex pad-lr bg-grey">
            <?php
                $page_children = new WP_Query(array(
                  'post_type' => 'page',
                  'post_parent' => 1368
                )
                );
                if($page_children->have_posts()) :
                  while($page_children->have_posts()): $page_children->the_post();
                ?>
                    <div class="main-services-box" style="background-image: url(<?php the_field('services-page-card-img'); ?>)">
                        <div class="main-services-box-opacity">
                            <h4><?php the_title(); ?></h4>
                            <p><?php the_excerpt(); ?></p>
                            <p><a href="<?php the_permalink();?>"><?php pll_e('Детальнее'); ?></a></p>
                        </div>
                    </div>
                <?php
                endwhile;
                endif; 
                wp_reset_query();
            ?>
        </section>

        <!-- почему мы -->
        <section class="main-why-we flex pad-lr">
            <div class="main-why-we-1 center">
                <h2 class="title"><?php the_field('why-we-title'); ?></h2>
                <p><?php the_field('why-we-undertitle'); ?></p>
            </div>
            <div class="main-why-we-2 center">
                <div class="main-why-we-2-1">
                    <img class="" src="<?php echo get_template_directory_uri() . '/images/mark-2.png' ?>">
                </div>
                <div class="main-why-we-2-2 сhrone"><span>50</span>+</div>
                <div class="main-why-we-2-3"><?php pll_e('объектов построено'); ?></div>
            </div>
            <div class="main-why-we-3 center">
                <div class="main-why-we-3-1">
                    <img class="" src="<?php echo get_template_directory_uri() . '/images/mark-1.png' ?>">
                </div>
                <div class="main-why-we-3-2 сhrone"><span>0</span>+</div>
                <div class="main-why-we-3-3"><?php pll_e('специалистов'); ?></div>
            </div>
        </section>

        <?php if( have_rows('why-we') ): ?>
            <section class="main-we-done flex pad-lr bg-grey">
                <?php while( have_rows('why-we') ): the_row(); ?>
                    <div class="main-we-done-box flex">
                        <div class="main-we-done-box-img"><span>✔</span></div>
                        <div class="main-we-done-box-text">
                            <h4><?php the_sub_field('why-we-name'); ?></h4>
                            <p><?php the_sub_field('why-we-text'); ?></p>
                        </div>
                    </div>
                <?php endwhile; ?>
            </section>
        <?php endif; ?>
        <a name="comments"></a>


        <!-- что думают о нас -->
        <?php get_sidebar( 'slider-about-us' ); ?>

        <!-- ПРЕДОСТАВЛЯЕМ ВСЕ СТРОИТЕЛЬНЫЕ УСЛУГИ -->
        <section class="main-building-service flex pad-lr">
            <div class="main-building-service-box flex">
                <div class="main-building-service-box-1 flex">
                    <h2 class="title"><?php the_field('we-represent-title'); ?></h2>
                    <p><?php the_field('we-represent-text'); ?></p>
                    <form class="form-service-order-btn">
                    <input type="hidden" value="Главная страница" class="" />
                    <input type="button" class="btn-show-form" value="<?php pll_e('ЗАКАЗАТЬ СЕЙЧАС'); ?>">
                    <input type="hidden" value="mail" class="" />
                    </form>

                    <!-- <input type="button" value="ЗАКАЗАТЬ СЕЙЧАС"> -->
                </div>
                <div class="main-building-service-box-2">
                    <img class="" src="<?php echo get_template_directory_uri() . '/images/about-light-1.png' ?>">
                </div>
            </div>
        </section>

        <!-- последние новости -->
        <section class="main-last-news bg-grey pad-lr">
            <h2 class="title"><?php pll_e('ПОСЛЕДНИЕ НОВОСТИ'); ?></h2>
            <div class="main-last-news-box flex">
                 <?php
                  global $post;
                  $postslist = get_posts( array( 'posts_per_page' => 3, 'order'=> 'DESC', 'orderby' => 'title' ) );
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
        </section>

        <?php get_sidebar( 'get-consult' ); ?>
	</main>


    <?php get_sidebar( 'order-form' ); ?>

</div>

    

<?php
get_footer();
