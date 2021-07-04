<?php
/**
 * The template for front-page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package promapl
 */

get_header();
?>

	<main id="primary" class="site-main">


        <div class="main-container-1-box">

            <?php if( get_field('main_video') ): ?>
        
                <div class="main-container-1-video">
                    <video loop="loop" muted="" autoplay="autoplay" poster="<?php the_field('main_video_img'); ?>" id="main-container-1-video">
                        <source src="<?php the_field('main_video'); ?>" type="video/mp4">
                    </video>
                </div>

            <?php else: ?>

            <div class="main-container-1"  style="background-image: url(<?php the_field('main_image'); ?>)"></div>

            <?php endif; ?>
        </div>


        <?php if( have_rows('our_services') ): ?>	
            <div class="main-container-2">
                <div class="container">
                    <div class="main-container-2-title title flex">
                        <div class="line-left"></div>
                        <div class="main-container-2-title-title"><?php the_field('our_services_name'); ?></div>
                        <div class="line-right"></div>
                    </div>

                    <div class="container-carusel">
                       <div class="container-arr-left-2 arr-left"></div>
                       <div class="main-container-2-cards flex">
                           <?php while( have_rows('our_services') ): the_row(); 
                               $serviceName1 = get_sub_field('our_service_name_1');
                               $serviceName2 = get_sub_field('our_service_name_2');
			    	   		   $serviceLink = get_sub_field('our_service_link');
			    	   		   $serviceLogo = get_sub_field('our_service_logo');
                           ?>
                           <div class="main-container-2-cards-card">
                               <a href="<?php echo $serviceLink; ?>"">
                                   <div class="main-container-2-cards-card-top">
                                      <?php if( $serviceLogo ): ?>
                                         <img class="main-container-2-cards-card-top-img" src="<?php echo $serviceLogo; ?>" />
                                      <?php endif; ?>
                                   </div>
                                   <div class="main-container-2-cards-card-bottom">
                                       <?php echo $serviceName1; ?><br><?php echo $serviceName2; ?>
                                   </div>
                               </a>
                           </div>
			    	       <?php endwhile; ?>
                       </div>
                       <div class="container-arr-right-2 arr-right"></div>
                    </div>

                </div>
            </div>
        <?php endif; ?>


        <div class="main-container-3">
            <div class="container">
                <div class="main-container-3-title title flex">
                    <div class="line-left"></div>
                    <div class="main-container-3-title-title"><?php the_field('our_specialist_name'); ?></div>
                    <div class="line-right"></div>
                </div>
            </div>

            <div class="main-container-3-content flex">
                <?php if( have_rows('our_specialist_left') ): ?>
                    <div class="main-container-3-content-1">
                        <?php while( have_rows('our_specialist_left') ): the_row(); 
                            $specialistLeftName = get_sub_field('our_specialist_left_name');
			            	$specialistLeftLogo = get_sub_field('our_specialist_left_logo');
                        ?>
                            <div class="flex flex-reverse">
                                <div class="main-container-3-content-1-left">
                                    <?php if( $specialistLeftLogo ): ?>
                                       <img class="main-container-3-content-1-right-img" src="<?php echo $specialistLeftLogo; ?>" />
                                    <?php endif; ?>
                                </div>
                                <div class="main-container-3-content-1-right">
                                    <?php echo $specialistLeftName; ?>
                                </div>
                            </div>
                        <?php endwhile; ?>
                    </div>
                <?php endif; ?>

                 <div class="main-container-3-content-2">
                     <img class="main-container-3-content-2-img" src="<?php the_field('our_specialist_img'); ?>">
                 </div>

                 <?php if( have_rows('our_specialist_right') ): ?>
                    <div class="main-container-3-content-3">
                        <?php while( have_rows('our_specialist_right') ): the_row(); 
                            $specialistRightName = get_sub_field('our_specialist_right_name');
			            	$specialistRightLogo = get_sub_field('our_specialist_right_logo');
                        ?>
                            <div class="flex">
                                <div class="main-container-3-content-3-left">
                                    <?php if( $specialistRightLogo ): ?>
                                       <img class="main-container-3-content-3-right-img" src="<?php echo $specialistRightLogo; ?>" />
                                    <?php endif; ?>
                                </div>
                                <div class="main-container-3-content-3-right">
                                    <?php echo $specialistRightName; ?>
                                </div>
                            </div>
                        <?php endwhile; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>

        <div class="main-container-4">
            <div class="main-container-4-title title"><?php the_field('sertifications_name'); ?></div>
            <?php if( have_rows('sertifications') ): ?>
                <div class="main-container-4-content flex">
                    <?php while ( have_rows('sertifications') ) : the_row(); ?>
                        <div class="main-container-4-content-box flex">
                            <img class="main-container-4-content-img" src="<?php the_sub_field('sertification_logo'); ?>">
                        </div>
                    <?php endwhile; ?>
                </div>
            <?php endif; ?>
        </div>


        <?php if( have_rows('our_advantages') ): ?>
            <div class="main-container-5">
                <div class="container">
                    <div class="main-container-5-title flex title">
                        <div class="line-left"></div>
                        <div class="main-container-5-title-title"><?php the_field('our_advantages_name'); ?></div>
                        <div class="line-right"></div>
                    </div>

                    <div class="container-carusel">
                        <div class="container-arr-left-5 arr-left"></div>
                        <div class="main-container-5-content flex">
                            <?php while ( have_rows('our_advantages') ) : the_row(); ?>
                               <div class="main-container-5-box">
                                   <div class="main-container-5-box-flex flex">
                                   <div class="main-container-5-box-left flex">
                                       <img class="main-container-5-box-left-img" src="<?php the_sub_field('our_advantages_logo'); ?>">
                                   </div>
                                   <div class="main-container-5-box-right flex">
                                       <div class="main-container-5-box-right-top"><?php the_sub_field('our_advantages_name_1'); ?></div>
                                       <div class="main-container-5-box-right-bottom"><?php the_sub_field('our_advantages_name_2'); ?></div>
                                   </div>
                                   </div>
                               </div>
                            <?php endwhile; ?>
                        </div>
                        <div class="container-arr-right-5 arr-right"></div>
                    </div>

                </div>
            </div>
        <?php endif; ?>

        <?php if( have_rows('our_clients') ): ?>
            <div class="main-container-6">
                <div class="container">
                    <div class="main-container-6-title flex title">
                        <div class="line-left"></div>
                        <div class="main-container-6-title-title"><?php the_field('our_clients_name'); ?></div>
                        <div class="line-right"></div>
                    </div>
                    <div class="container-carusel">
                        <div class="container-arr-left-6 arr-left"></div>
                        <div class="main-container-6-content flex">
                            <?php while ( have_rows('our_clients') ) : the_row(); ?>
                                <div class="main-container-6-content-box flex">
                                    <div class="main-container-6-content-box-box flex">
                                        <img class="main-container-6-content-box-img" src="<?php the_sub_field('client_logo'); ?>">
                                    </div>
                                </div>
                            <?php endwhile; ?>
                        </div>
                        <div class="container-arr-right-6 arr-right"></div>
                    </div>
                </div>
            </div>
        <?php endif; ?>


        <!-- <div class="flex1">
            <div class="test"></div>
            <div style="width:400px">ssssss sssssss sssss</div>
            <div class="test"></div>

        </div> -->

    </main>

    <script>
        window.addEventListener("load", init);

        function init() {
            let clientWidth = document.body.clientWidth;
            let elemVideo = document.querySelector('.main-container-1-video');
    
            if (clientWidth < 550) {
                elemVideo.innerHTML = '<img class="" src="<?php the_field('main_video_img'); ?>">';
            }
        }
    </script>
    
<?php
get_footer();
