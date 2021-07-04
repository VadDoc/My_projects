<?php
/**
 * The template for services-page
 * Template Name: Услуги (дочерние)
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_an_services_Page
 *
 * @package skgroup
 */

get_header();
?>

<?php
    $id = get_the_ID();
    $titlesize1 = 'title-size-1';
    $titlesize2 = 'title-size-2';
    $titlesize3 = 'title-size-3';
    $bggrey = 'bg-grey';
    $bgwhite = 'bg-white';
    $darkgrey = "dark-grey";
    $black = "black";
    $grn = "грн";
    $dollar = "$";

    if( get_field('lang') == 'RU' ) {
    $n_contact_page_id = 19;
}
else  {
    $n_contact_page_id = 2999;
}
    ?>
<?php if($id == 1081 || $id == 2853) { echo $bggrey; } ?>

<div class="main bg-grey">
	<main class="site-main services-page ">
        <?php 
            $id = get_the_ID();
            if ($id == 1081 || $id == 2853): ?>
            <!-- ремонт квартир 1081 -->
                <section class="large-bg">
                    <div class="large-bg-content pad-lr">
                        <div class="yellow-title center">
                            <h1><?php the_field('repare-title-stroke-1'); ?></h1>
                        </div>
                        <div class="center">
                            <h2><?php the_field('repare-title-stroke-2'); ?></h2>
                        </div>
                        <div class="yellow-text center"><?php the_field('repare-title-stroke-3'); ?><div>
                        <div class="white-text center"><?php the_field('repare-title-stroke-4'); ?></div>
                        <div class="yellow-text center"><?php the_field('repare-title-stroke-5'); ?></div>
                        <div class="white-text center"><?php the_field('repare-title-stroke-6'); ?></div>
                        <div class="yellow-text center"><?php the_field('repare-title-stroke-7'); ?></div>
                        <div class="white-text center"><?php the_field('repare-title-stroke-8'); ?></div>
                        <div class="btn center">
                            <form class="form-service-order-btn">
                                <input type="hidden" value="Ремонт квартиры" class="" />
                                <input type="button" class="btn-show-form btn-transparent-yellow" value="<?php pll_e('Заказать консультацию'); ?>">
                                <input type="hidden" value="phone" class="" />
                            </form>
                        </div>
                    </div>
                </section>
            <?php else: ?>   
                <?php get_sidebar( 'page-title' ); ?>

        <?php endif; ?>

        <section class="main-content pad-lr">
            <?php the_content() ;?>
            <div style="clear:both;"></div>
        </section>

        <?php if( have_rows('customer-benifits') ): ?>
            <section class="customer-benifits pad-lr">
                <div class="customer-benifits-title center"><h3><?php the_field('customer-benifits-title'); ?></h3></div>
                <div class="customer-benifits-container flex">
                    <?php while( have_rows('customer-benifits') ): the_row(); ?>
                        <div class="customer-benifits-box">
                            <div class="customer-benifits-img flex"><img src="<?php the_sub_field('customer-benifits-img'); ?>" alt=""></div>
                            <div class="customer-benifits-name center"><?php the_sub_field('customer-benifits-name'); ?></div>
                            <div class="customer-benifits-text center"><?php the_sub_field('customer-benifits-text'); ?></div>
                        </div>
                    <?php endwhile; ?>
                </div>
            </section>
        <?php endif; ?>

        <!-- ремонт квартир -->
        <?php if( have_rows('our-specialist') ): ?>
            <section class="our-specialists pad-lr <?php if($id == 1081 || $id == 2853) { echo $bgwhite; } ?>">
                    <ul class="">
                        <?php while( have_rows('our-specialist') ): the_row(); ?>
                        <li class="flex">
                          <div class="number-box">
                              <div class="number yellow"><?php the_sub_field('our-specialist-number'); ?></div>
                          </div>
                          <div>
                              <span class="name"><?php the_sub_field('our-specialist-name'); ?></span><br>
                              <span class="text"><?php the_sub_field('our-specialist-text'); ?></span>
                          </div>
                        </li>
                        <?php endwhile; ?>
                    </ul>
                <p class="last-text center"><?php the_field('our-specialist-last-text'); ?></p>
                <h4 class="motto center yellow"><?php the_field('our-specialist-motto'); ?></h4>
            </section>
        <?php endif; ?>

        <!-- наши преимумущества -->
        <?php if( have_rows('advantages') ): ?>
            <section class="advantages pad-lr">
                <div class="advantages-title serv-title"><h2 class="<?php if($id == 1101 || $id == 2935) { echo $titlesize1 . " " . $darkgrey; } ?>"><?php the_field('advantages-title'); ?></h2></div>
                <div class="advantages-title-text center"><h4><?php the_field('advantages-title-text'); ?></h4></div>
                <div class="advantages-container flex">
                    <?php while( have_rows('advantages') ): the_row(); ?>
                        <div class="advantages-box flex">
                            <div class="advantages-img"><img src="<?php the_sub_field('advantages-img'); ?>"></div>
                            <div class="advantages-box-right">
                                <div class="advantages-name"><h4><?php the_sub_field('advantages-name'); ?></h4></div>
                                <div class="advantages-text"><?php the_sub_field('advantages-text'); ?></div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
                <div class="advantages-btn">
                    <form class="form-service-order-btn">
                        <input type="hidden" value="<?php the_title(); ?>" class="" />
                        <input type="button" class="btn-show-form btn-yellow" value="<?php pll_e('Получить консультацию'); ?>">
                        <input type="hidden" value="phone" class="" />
                    </form>
                </div>
            </section>
        <?php endif; ?>

        <!-- работы включают -->
        <?php if( have_rows('work-includs') ): ?>
            <section class="work-includs pad-lr">
                <div class="work-includs-title serv-title"><h2 class="<?php if($id == 1101 || $id == 2935) { echo $titlesize1 . " " . $darkgrey; } ?>"><?php the_field('work-includs-title'); ?></h2></div>
                <div class="work-includs-title-text center"><h4><?php the_field('work-includs-title-text'); ?></h4></div>
                <div class="work-includs-container flex">
                    <?php while( have_rows('work-includs') ): the_row(); ?>
                        <div class="work-includs-box flex">
                            <div class="work-includs-box-right">
                                <div class="work-includs-name"><h4><?php the_sub_field('work-includs-name'); ?></h4></div>
                                <div class="work-includs-text"><?php the_sub_field('work-includs-text'); ?></div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            </section>
        <?php endif; ?>


        <!-- наши проекты -->
        <?php if( have_rows('our-projects') ): ?>
            <section class="our-projects bg-white">
                <div class="our-projects-title"><h2><?php the_field('our-projects-title'); ?></h2></div>
                    <div class="our-projects-container">
                        <?php while( have_rows('our-projects') ): the_row(); ?>
                            <div class="our-projects-item pad-lr">
                                <div class="our-projects-name center"><h4><?php the_sub_field('our-projects-name'); ?></h4></div>
                                <div class="our-projects-box flex">
                                    <div class="our-projects-slider">

                                        <?php if( have_rows('our-projects-slides') ): ?>
                                            <div class="slides-container">
                                        
                                                 <?php while( have_rows('our-projects-slides') ): the_row(); ?>
                                                 
                                                     <div class="slides slides-<?php the_sub_field('our-projects-number-in'); ?>">
                                                       <div class="numbertext">1 / 6</div>
                                                       <img src="<?php the_sub_field('our-projects-slides-img'); ?>">
                                                     </div>
                                                 <?php endwhile; ?>
                                             
                                                 <a class="prev" id="slides-prev-<?php the_sub_field('our-projects-number-out'); ?>">❮</a>
                                                 <a class="next" id="slides-next-<?php the_sub_field('our-projects-number-out'); ?>">❯</a>
                                             
                                             
                                                 <div class="row-slides-container">
                                                     <div class="row-slides">
                                                     <?php while( have_rows('our-projects-slides') ): the_row(); ?>
                                                         <div class="column-slides">
                                                           <img class="demo demo-<?php the_sub_field('our-projects-number-in'); ?>" src="<?php the_sub_field('our-projects-slides-img'); ?>" alt="The Woods">
                                                         </div>
                                                     <?php endwhile; ?>
                                                     </div>
                                                 </div>
                                        
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                    <div class="our-projects-content flex">
                                        <p><b><?php the_sub_field('our-projects-type_name'); ?>:</b> <?php the_sub_field('our-projects-type'); ?></p>
                                        <p><b><?php the_sub_field('our-projects-square_name'); ?>:</b> <?php the_sub_field('our-projects-square'); ?></p>
                                        <p><b><?php the_sub_field('our-projects-date_name'); ?></:</b> <?php the_sub_field('our-projects-date'); ?></p>
                                        <div class="repair-prices-accordion">
                                            <div class="accordion"><?php the_sub_field('our-projects-task_name'); ?>:</div>
                                            <div class="panel"><p><?php the_sub_field('our-projects-task'); ?></p></div>
                                        </div>
                                        <div class="repair-prices-accordion">
                                            <div class="accordion"><?php the_sub_field('our-projects-feature_name'); ?>:</div>
                                            <div class="panel"><p><?php the_sub_field('our-projects-feature'); ?></p></div>
                                        </div>
                                        <div class="repair-prices-btn flex">
                                            <form class="form-service-order-btn">
                                                <input type="hidden" value="Хочу ремонт, как <?php the_sub_field('our-projects-name'); ?>" class="" />
                                                <input type="button" class="btn-show-form" value="<?php the_field('our-projects-btn'); ?>">
                                                <input type="hidden" value="phone" class="" />
                                            </form>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        <?php endwhile; ?> 
                    </div> 
            </section>
        <?php endif; ?>

        <!-- дизайн интерьера -->
        <?php if( have_rows('about-design-works') ): ?>
            <section class="about-design-works pad-lr">
                <div class="about-design-works-title serv-title"><?php the_field('about-design-works-title'); ?></div>
                    <?php while( have_rows('about-design-works') ): the_row(); ?>
                          <div class="about-design-works-container">
                              <div class="about-design-works-name"><?php the_sub_field('about-design-works-name'); ?></div>
                              <div class="about-design-works-text"><?php the_sub_field('about-design-works-text'); ?></div>
                          </div>
                    <?php endwhile; ?>
            </section>
        <?php endif; ?>

        <!-- цены -->
        <?php
        if( have_rows('repair-prices') ): ?>
            <section class="repair-prices pad-lr <?php if($id == 1081 || $id == 2853) { echo $bgwhite; } ?>">
                <div class="repair-prices-title serv-title">
                    <h4 class="<?php if($id == 1422 || $id == 3376) { echo $titlesize1; } if($id == 1105 || $id == 3416 || $id == 2045 || $id == 2886 || $id == 2022 || $id == 3347) { echo $titlesize2; } if($id == 1083 || $id == 2869 || $id == 1101 || $id == 2935) { echo $titlesize3; }?> <?php if($id == 1101 || $id == 2935 || $id == 1105 || $id == 3416) { echo $black; } ?>"><?php the_field('repair-prices-title'); ?></h4>
                </div>
                <div class="repair-prices-container flex">
                    <?php while( have_rows('repair-prices') ): the_row(); ?>
                        <div class="repair-prices-item">
                            <div class="repair-prices-box">
                                <div class="repair-prices-name center"><h3><?php the_sub_field('repair-prices-name'); ?></h3></div>
                                <div class="repair-prices-price center"><?php the_field('repair-prices-text-1') ?> <span><?php the_sub_field('repair-prices-price'); ?></span> <?php if($id == 1101 || $id == 2935 || $id == 1422 || $id == 3376 || $id == 1105 || $id == 3416) { echo $dollar; } else { echo $grn; } ?>/м²</div>
                                <?php if( get_sub_field('repair-prices-img') ): ?>
                                    <div class="repair-prices-img"><img src="<?php the_sub_field('repair-prices-img'); ?>" alt=""></div>
                                <?php endif; ?>
                                <?php if( get_sub_field('repair-prices-text') ): ?>
                                    <div class="repair-prices-text center"><?php the_sub_field('repair-prices-text'); ?></div>
                                <?php endif; ?>
                            </div>
                            <?php if( get_sub_field('repair-prices-includs') ): ?>
                                <div class="repair-prices-accordion">
                                    <div class="accordion"><?php the_field('repair-prices-text-2') ?></div>
                                    <div class="panel"><?php the_sub_field('repair-prices-includs'); ?></div>
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php endwhile; ?>
                </div>
            </section>
        <?php endif; ?>

        <!-- виды работ, готовых продуктов -->
        <?php if( have_rows('view-works') ): ?>
            <section class="view-works pad-lr">
            <?php if( get_field('view-works-title') ): ?>
                <div class="view-works-title center"><?php the_field('view-works-title'); ?></div>
            <?php endif; ?>
                <div class="view-works-container flex">
                    <?php while( have_rows('view-works') ): the_row(); ?>
                        <div class="view-works-box">
                            <div class="view-works-name center"><?php the_sub_field('view-works-name'); ?></div>
                            <?php if( get_sub_field('view-works-text') ): ?>
                                <div class="view-works-text center"><?php the_sub_field('view-works-text'); ?></div>
                            <?php endif; ?>
                        </div>
                    <?php endwhile; ?>
                </div>
            </section>
        <?php endif; ?>

        <!-- этапы строительства, работ -->
        <?php if( have_rows('building-stages') ): ?>
            <section class="building-stages pad-lr">
                <div class="building-stages-title serv-title"><h4><?php the_field('building-stages-title'); ?></h4></div>
                <div class="building-stages-container flex">
                    <?php while( have_rows('building-stages') ): the_row(); ?>
                        <div class="building-stages-box">
                            <div class="building-stages-box-top flex">
                                <div class="building-stages-img"><img src="<?php the_sub_field('building-stages-img'); ?>" alt=""></div>
                                <div class="building-stages-name"><h3><?php the_sub_field('building-stages-name'); ?></h3></div>
                            </div>
                            <div class="building-stages-text"><?php the_sub_field('building-stages-text'); ?></div>
                        </div>
                    <?php endwhile; ?>
                </div>
            </section>
        <?php endif; ?>



        <?php if( have_rows('repair-stages') ): ?>
            <section class="repair-stages pad-lr">
                <div class="repair-stages-title serv-title"><h4><?php the_field('repair-stages-title'); ?></h4></div>
                    <div class="repair-stages-container flex">
                        <?php while( have_rows('repair-stages') ): the_row(); ?>
                            <div class="repair-stages-box">
                                <div class="repair-stages-number center yellow"><?php the_sub_field('repair-stages-number'); ?></div>
                                <div class="repair-stages-name center "><?php the_sub_field('repair-stages-name'); ?></div>
                                <div class="repair-stages-text center"><?php the_sub_field('repair-stages-text'); ?></div>
                            </div>
                        <?php endwhile; ?>
                    </div>
            </section>
        <?php endif; ?>

        <?php if( get_field('house-on-text') ): ?>
            <section class="house-on-key pad-lr">
                <div class="house-on-key-title"><h2><?php the_field('house-on-title'); ?></h2></div>
                <div class="house-on-key-container flex">
                    <div class="house-on-key-img-1"><img src="<?php the_field('house-on-key-img-1'); ?>" alt=""></div>
                    <div class="house-on-key-text"><?php the_field('house-on-text'); ?></div>
                    <div class="house-on-key-img-2"><img src="<?php the_field('house-on-key-img-2'); ?>" alt=""></div>
                </div>
            </section>
        <?php endif; ?>

        <?php if( have_rows('questions-answers') ): ?>
            <section class="questions-answers pad-lr <?php if($id == 1081 || $id == 2853) { echo $bgwhite; } ?>">
                <div class="questions-answers-title serv-title"><h3><?php the_field('questions-answers-title'); ?></h3></div>
                    <div class="questions-answers-container">
                        <?php while( have_rows('questions-answers') ): the_row(); ?>
                            <div class="questions-answers-box">
                                <div class="questions-answers-question accordion"><?php the_sub_field('questions-answers-question'); ?></div>
                                <div class="questions-answers-answer panel"><p><?php the_sub_field('questions-answers-answer'); ?></p></div>
                            </div>
                        <?php endwhile; ?>
                    </div>
            </section>
        <?php endif; ?>

        <?php 
            $id = get_the_ID();
            if ($id != 1081 && $id != 2853): ?>
              <section class="contact-form-order pad-lr">
                  <div class="star-line center">&#11088; &#11088; &#11088; &#11088; &#11088;</div>
                  <div class="contact-form-order-title center"><?php the_field('form-order-title'); ?></div>
                  <div class="contact-form-order-title-text center yellow"><?php the_field('our-contacts_10', $n_contact_page_id); ?></div>
                  <div class="contact-form-order-box flex">
                      <div class="contact-form-order-1">
                          <?php get_sidebar( 'mail-form' ); ?>
                     </div>
                      <div class="contact-form-order-2">
                          <div><?php the_field('our-contacts_1', $n_contact_page_id); ?></div>
                          <div><?php the_field('our-contacts_2', $n_contact_page_id); ?></div>
                          <div>
                              <p><?php the_field('our-contacts_3', $n_contact_page_id); ?></p>
                              <p><?php the_field('our-contacts_4', $n_contact_page_id); ?></p>
                          </div>
                          <div><?php the_field('our-contacts_5', $n_contact_page_id); ?></div>
                          <div>
                              <p><a href="tel:<?php the_field('our-contacts_7', $n_contact_page_id); ?>"><?php the_field('our-contacts_6', $n_contact_page_id); ?></a></p>
                          </div>
                          <div><?php the_field('our-contacts_8', $n_contact_page_id); ?> <a href="<?php the_field('our-contacts_9', $n_contact_page_id); ?>"><?php the_field('our-contacts_9', $n_contact_page_id); ?></a></div>
                      </div>
                  </div>


                  
              </section>
        <?php endif; ?>

        <?php 
            $id = get_the_ID();
            if ($id == 1081 || $id == 2853): ?>
                <section class="contacts pad-lr">
                    <div class="star-line center">&#11088; &#11088; &#11088; &#11088; &#11088;</div>
                    <div class="contacts-container flex">
                        <div class="contacts-container-contacts flex">
                            <div class="text-1"><?php the_field('repare-contact-text_1'); ?></div>
                            <div class="text-2"><?php the_field('repare-contact-text_2'); ?></div>
                            <div class="phone center">
                                <div><a href="tel:<?php the_field('our-contacts_7', $n_contact_page_id); ?>"><?php the_field('our-contacts_6', $n_contact_page_id); ?></a></div>
                                <div><?php the_field('repare-contact-text_4'); ?></div>
                            </div>
                            <div class="email"><a href="to:<?php the_field('our-contacts_9', $n_contact_page_id); ?>"><?php the_field('our-contacts_9', $n_contact_page_id); ?></a></div>
                            <div class="text-3"><?php the_field('repare-contact-text_6'); ?></div>
                            <div class="social flex">
                                <a href="">Viber</a><a href="">Telegram</a>
                            </div>
                        </div>
                        <div class="contacts-container-map">
                            <iframe frameborder=0 scrolling=no marginheight=0 marginwidth=0 src="https://maps.google.com/maps?q=%D0%98%D1%80%D0%BF%D0%B5%D0%BD%D1%8C%2C%20%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%2094&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" aria-label="Ирпень, Садовая 94"></iframe>
                        </div>
                    </div>
                </section>
        <?php endif; ?>


        <?php get_sidebar( 'instruments-image' ); ?>


	</main>

    <?php get_sidebar( 'order-form' ); ?>


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
