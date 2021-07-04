<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
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
				<div class="post-content">
				    <?php if (have_posts()) : while (have_posts()) : the_post(); 
        		       $custom_fields = get_post_custom(); //Значения всех полей в виде массива	
					?>


                        <!--SEO_TEXT1_START-->	
		                <div class="post" id="post-<?php the_ID(); ?>">
		                	<div class="entry">
                                <?php if ( has_post_thumbnail() ): ?>
                                    <div class="circular">
                                         <?php the_post_thumbnail(); ?> 
                                    </div>
                                <?php else: 
                                    $txtclass = 'w100';
                                endif; ?>
				                <div class="txt-first <?php if(isset($txtClass)) { echo $txtclass; } ?>">
                                    <?php if (!empty($h1)){ ?>
                                        <h1 class="darkblue"><?php  echo $h1; ?></h1>
                                    <?php }else{ ?>
                                        <h1 class="darkblue"><?php  the_title(); ?></h1>
                                    <?php } ?>
                                    <?php the_content(); ?>
				        		</div>
				        			
                                <?php if (!empty($custom_fields['img_1'][0]) or !empty($custom_fields['img_2'][0])) :?>
                                    <div class="floatleft w60">
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
                                <?php endif; ?><!-- 2 ниже  -->

                                <?php if ($custom_fields['state'][0] == '1') : ?>
                                    <div class="order-wrap">
                                        <?php 
                                        $id = get_the_ID();
                                        if ($id != 95): ?>
                                            <form class="form-service-order-btn">
                                                <input type="hidden" value="Услуга: <?php the_title(); ?>" class="" />
                                                <input type="hidden" value="Заказать услугу" class="" />
                                                <input type="button" class="button service-button" value="Заказать услугу">
                                            </form>
                                        <?php endif; ?>
                                              <form class="form-service-order-btn">
                                                    <input type="hidden" value="Сертификат: <?php the_title(); ?>" class="prog-name" />
                                                    <input type="hidden" value="Заказать сертификат" class="" />
                                                    <input type="button" class="button order-sert-btn" value="Заказать сертификат">
                                              </form>
                                    </div>    
                                <?php endif; ?>

				        	</div><!-- end entry  -->
				        			
               
				            <?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
                            <div class="clear"></div>
			            </div><!-- end post  -->
				        <!--SEO_TEXT1_END-->
				
                        <?php 
                        //Получем ID категории
                        $field = array();
                            $field['lnk1'] = get_field('relLink1');
                            $field['img1'] = get_field('relImg1' );
                            $field['lnk2'] = get_field('relLink2');
                            $field['img2'] = get_field('relImg2' );
                            $field['lnk3'] = get_field('relLink3' );
                            $field['img3'] = get_field('relImg3' );
                        $array_csk = array_filter($field);
                        if (!empty( $array_csk )) :
                        ?>


                            <div class="divider clearfix clear"></div>
							<div class="comment-title lightgrey centered">Отзывы:</div>
							<div>
								<?php comments_template(); ?>
							</div>
                             
                
		                    <div class="clear"></div>
                            <div class="divider clearfix clear commentsdiv floatleft"></div>  
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
                                    <?php if (!empty($field['lnk3']) && !empty($field['img3'])  && $field['lnk3'] != 'http://spanewua.s56.yourdomain.com.ua/category/oberty-vaniya-i-tallasoterapiya/') :?>
                                        <div class="progr-card">
                                            <a href="<?php echo str_replace('tallassoterapiya', 'tallasoterapiya',$field['lnk3']); ?>">
                                                <img src="<?php echo $field['img3']['sizes']['thumbnail']; ?>"> 
                                            	<div class="progr-card-title"><?php echo $field['img3']['title']; ?></div>
                                            </a>
                                        </div>
                                    <?php endif; ?>
                                </div> <!-- end block -->
                            </div> <!-- end programmslist -->
                                    
                          <?php else: ?>
                                <div class="divider clearfix clear"></div>
                                <div class="comments-title-new lightgrey centered">Отзывы:</div>
                                <?php comments_template(); ?>    
                        <?php endif; ?>
                        <!-- </div> -->
					
					<?php endwhile; endif; ?>
				</div><!-- end post-content  -->
    		</div><!-- end mainpage-main  -->
    	</main>
    </div><!-- end main  -->

<?php
get_footer();
