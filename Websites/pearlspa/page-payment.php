<?php
/**
 * The template for page-payment
 * Template Name: WayForPay
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
                                <?php if (has_post_thumbnail()): ?>
                                    <div class="circular">
                                        <?php the_post_thumbnail(); ?>
                                    </div>
                                <?php else:
                                    $txtclass = 'w100';
                                endif; ?>
                                <div class="txt-first <?php if (isset($txtClass)) {echo $txtclass;} ?>">
                                    <?php if (!empty($h1)) { ?>
                                        <h1 class="darkblue"><?php echo $h1; ?></h1>
                                    <?php } else { ?>
                                        <h1 class="darkblue"><?php the_field('sertificat-page-title'); ?></h1>
                                    <?php } ?>
            
                                    <?php the_content(); ?>
                                    <?php if (!empty($custom_fields['img_1'][0]) or !empty($custom_fields['img_2'][0])) : ?>
                                    <div class="floatleft w60">
                                        <?php if (!empty($custom_fields['second-txt'][0])) {
                                            echo $custom_fields['second-txt'][0];
                                        } ?>
                                    </div>
                                    <div class="dop-images floatright w32">
                                        <?php if (!empty($custom_fields['img_1'][0])) : ?>
                                            <div class="img"><?php echo wp_get_attachment_image($custom_fields['img_1'][0], 'medium'); ?></div>
                                        <?php endif;
                                        if (!empty($custom_fields['img_2'][0])) :?>
                                            <div class="img"><?php echo wp_get_attachment_image($custom_fields['img_2'][0], 'medium'); ?></div>
                                        <?php endif; ?>
                                    </div>
            
                                </div><!-- end txt-first  -->
                                <?php endif; ?>

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
                                          <?php else: ?>
                                              <form class="form-service-order-btn">
                                                    <input type="hidden" value="Сертификат: <?php the_title(); ?>" class="prog-name" />
                                                    <input type="hidden" value="Заказать сертификат" class="" />
                                                    <input type="button" class="button order-sert-btn" value="Заказать сертификат">
                                              </form>
                                        <?php endif; ?>
                                    </div>    
                                <?php endif; ?>
            
                                <?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
                                <div class="clear"></div>
                                <p>Если Вы желаете оплатить Сертификат или спа процедуры on-line , воспользуйтесь, пожалуйста,
                                    формой ниже. Если Вы располагаете счетом в валюте другой страны, сумму все равно следует
                                    указывать в гривнах, конвертация произойдет автоматически.</p>
                                <p>If you wish to pay certificate or spa treatment on-line, please use the form below. If you have
                                    the account in the currency of another country, the amount still to be reported in UAH , the
                                    conversion happens automatically.</p>
            
                               <!--New form-->
            
                                <form id="payment-form" method="POST" action="https://pearlspa.com.ua/test-payment">
                                    <div id="payment" class="form form--payment">
                                        <div class="form__col floatleft">
                                            <label class="darkblue">* Телефон / Phone: <p>+ <input type="tel"
                                                                                                   placeholder="Формат / Format: 380631234567"
                                                                                                   name="payment_phone"
                                                                                                   id="payment_phone"
                                                                                                   pattern="[0-9]{12}"                                                                        
                                                                                                   required></p>
                                            </label>
                                            <label class="darkblue">
                                                * Желаемые услуги / Desired services :
                                                <p>
                                                    <textarea rows="5" class="product_name" id="product_name" name="description"
                                                              required></textarea>
                                                </p>
                                            </label>
                                        </div>
                                        <div class="form__col floatright">
                                            <label class="darkblue clearfix">*Сумма/Sum (UAH): <p class="clearfix"><input
                                                            class="amount" type="number" size="6" placeholder="" name="amount"
                                                            id="payment_amount" required="required">
                                             <!--input type="hidden" value="UAH" id="currency" name="currency" class="currency"-->
                                                </p>
                                            </label>
                                            <div class="lightgrey clear"><sup>*</sup> - обязательны для заполнения / required fields
                                            </div>
                                          <?php   /* echo $string; */ ?>
                                        </div>
                                       
                                        <div class="clear form__col--1">
                                            <button type="submit" class="button">Оплатить Онлайн / Pay Online
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div><!-- end entry  -->
            
                            <?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
                            <div class="clear"></div>
            
                        </div><!-- end post  -->
            
                    <?php endwhile; endif; ?>
                
				</div><!-- end post-content  -->
    		</div><!-- end mainpage-main  -->
    	</main>
    </div><!-- end main  -->

<?php
get_footer();
