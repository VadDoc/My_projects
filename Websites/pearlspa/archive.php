<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pearlspa
 */

get_header();
?>

    <div class="main">
    	<main id="primary" class="site-main flex">
    		<div class="sidebar-left">
    		    <?php get_sidebar(); ?>
    		</div>
    		<div class="mainpage-main">
				<?php breadcrumbs(); ?>
				<div class="divider"></div>


                

                    <?php if(get_the_category()[0]->cat_ID == 5) :?>
                        <div class="action-page darkblue">
                            <h1 class="darkblue">Акции и новости</h1> 
                        </div>
                    <?php endif; ?>

				<div class="archive-posts">



                    <?php 
                    $category = get_the_category();
                    $ID = $category[0]->cat_ID;
                    $news_img = 'news-img';
                    $uri = $_SERVER['REQUEST_URI'];
                    $res = $wpdb->get_results('SELECT h1 FROM seo_optimise WHERE uri = "'. $uri .'"'); 
                    $h1 = $res[0]->h1;
                    
                    if (have_posts()) : while (have_posts()) : the_post(); ?>
                        
                        <div id="<?php the_ID(); ?>" class="item w100 clear">
                            <?php 
                                $custom_fields = get_post_custom(); //Значения всех полей в виде массива    
                            ?>

                             
                            <?php if ( has_post_thumbnail() ): ?>
                                
                                <div class="circular <?php if($ID == 5) { echo $news_img; } ?>">
                                     <?php the_post_thumbnail(); ?> 
                                </div>
                                <?php else: 
                                    $txtclass = 'w100';
                            endif; ?>
    
                            <div class="txt-first <?php if(isset($txtClass)) { echo $txtclass; } ?>">
                                <?php if($ID != 5) :?>
                                    <div style="font-size: 18px;" class="darkblue">
                                        <a href="<?php the_permalink(); ?>">
                                            <?php the_title(); ?>
                                        </a>
                                    </div>
                                <?php else: ?>
                                    <div class="news-date plum"><?php the_date(); ?></div>
                                    <div class="news-title darkblue"><?php the_title(); ?></div>
                                <?php endif;
                                the_content('Подробнее..'); ?>
                            </div> 

                                            
                            <?php if (!empty($custom_fields['img_1'][0]) or !empty($custom_fields['img_2'][0])) :?>
                                <div class="floatleft w60 txt-second">
                                    <?php if (!empty( $custom_fields['second-txt'][0] )) {
                                        echo $custom_fields['second-txt'][0];
                                    } ?>
                                </div>
    
                                <div class="dop-images floatright w32">
                                    <?php if ( !empty($custom_fields['img_1'][0]) ) : ?>
                                        <div class="img"><?php echo wp_get_attachment_image( $custom_fields['img_1'][0], 'medium' ); ?></div>
                                    <?php endif; 
                                    if ( !empty($custom_fields['img_2'][0]) ) :?>
                                        <div class="img"><?php echo wp_get_attachment_image( $custom_fields['img_2'][0], 'medium' ); ?></div>
                                    <?php endif;?>
                                </div>
    
                                <?php if ($custom_fields['state'][0] == '1') : ?>
                                    <div class="order-wrap">
                                        <form class="form-service-order-btn">
                                            <input type="hidden" value="Услуга: <?php the_title(); ?>" class="" />
                                            <input type="hidden" value="Заказать услугу" class="" />
                                            <input type="button" class="button service-button" value="Заказать">
                                        </form>
                                    </div>    
                                <?php endif; ?>
                            
                            <?php else: ?>
                                <div class="txt-second floatleft w100">
                                    <?php if (!empty( $custom_fields['second-txt'][0] )) {
                                        echo $custom_fields['second-txt'][0];
                                    } ?>
                                </div>
    

                            <?php if ($custom_fields['state'][0] == '1') : ?>
                                <div class="order-wrap">
                                    <form class="form-service-order-btn">
                                        <input type="hidden" value="Услуга: <?php the_title(); ?>" class="" />
                                        <input type="hidden" value="Заказать услугу" class="" />
                                        <input type="button" class="button service-button" value="Заказать услугу">
                                    </form>
                                      <form class="form-service-order-btn">
                                            <input type="hidden" value="Сертификат: <?php the_title(); ?>" class="prog-name" />
                                            <input type="hidden" value="Заказать сертификат" class="" />
                                            <input type="button" class="button order-sert-btn" value="Заказать сертификат">
                                      </form>
                                </div>    
                            <?php endif; ?>
    
    
                            <?php endif; ?>
                        </div> <!-- end item -->    

                        <?php if($ID != 5) :?>
                            <div class="divider clearfix clear"></div>
                        <?php endif; ?>
    
               
                    <?php endwhile; 
                    endif; ?>
    
                            
                    <?php 
                    //Получем ID категории
                    $category_id = get_cat_ID( single_cat_title('',false) );
                    if( !empty($category_id) ) {
                        $field = array();
                        $field['lnk1'] = get_field('relLink1', 'category_'.$category_id );
     
                        $field['img1'] = get_field('relImg1', 'category_'.$category_id );
    
                        $field['lnk2'] = get_field('relLink2', 'category_'.$category_id );
     
                        $field['img2'] = get_field('relImg2', 'category_'.$category_id );
                        $field['lnk3'] = get_field('relLink3', 'category_'.$category_id );
     
                        $field['img3'] = get_field('relImg4', 'category_'.$category_id );
                        $array_csk = array_filter($field);
                    }
            
                    if (!empty($array_csk) ) :
                    ?>
                        <div class="programmslist related" style="width:100%;">
                            <div class="lightgrey centered">Мы также рекомендуем:</div>
                            <div class="block nomargin flex justify-around">
                                <?php if (!empty($field['lnk1']) && !empty($field['img1'])) :?>
                                    <div class="progr-card">
                                        <a href="<?php echo str_replace('tallassoterapiya', 'tallasoterapiya',$field['lnk1']); ?>">
                                            <img src="<?php echo $field['img1']['sizes']['thumbnail']; ?>"> 
                                        	<div class="progr-card-title"><?php echo $field['img1']['title']; ?></div>
                                        </a>
                                    </div>
                                <?php endif; ?>
                                <?php if (!empty($field['lnk2']) && !empty($field['img2'])) :?>
                                    <div class="progr-card">
                                        <a href="<?php echo str_replace('tallassoterapiya', 'tallasoterapiya',$field['lnk2']); ?>">
                                            <img src="<?php echo $field['img2']['sizes']['thumbnail']; ?>"> 
                                        	<div class="progr-card-title"><?php echo $field['img2']['title']; ?></div>
                                        </a>
                                    </div>
                                <?php endif; ?>
                                <?php if (!empty($field['lnk3']) && !empty($field['img3'])  && $field['lnk3'] != 'https://pearlspa.com.ua/category/oberty-vaniya-i-tallasoterapiya/') :?>
                                    <div class="progr-card">
                                        <a href="<?php echo str_replace('tallassoterapiya', 'tallasoterapiya',$field['lnk3']); ?>">
                                            <img src="<?php echo $field['img3']['sizes']['thumbnail']; ?>"> 
                                        	<div class="progr-card-title"><?php echo $field['img3']['title']; ?></div>
                                        </a>
                                    </div>
                                <?php endif; ?>
                            </div> <!-- end block  -->
                        </div> <!-- end programmslist  -->
                    <?php endif; ?> 

				</div> <!-- end archive-posts  -->
    		</div> <!-- end mainpage-main  -->
    	</main>
	</div> <!-- end main  -->

<?php
get_footer();
