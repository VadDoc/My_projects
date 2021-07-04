<?php
/**
 * The template for page-gallery
 * Template Name: Галлерея 
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
                    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			    
		                <div class="post" id="post-<?php the_ID(); ?>">
		                	<!-- <h1 class="darkblue"><?php the_title(); ?></h1> -->
							<h1 class="darkblue">Фотогалерея</h1>

							<div class="gallery-container">
							    <?php if( have_rows('fotogallery') ): ?>
								<?php while( have_rows('fotogallery') ): the_row(); ?>
    
							        <div class="item">
                                    	<div class="preview-item fade"">
                                    		<img class="fade" src="<?php the_sub_field('fotogallery-preview'); ?>" alt="">
                                    	</div>
							    		<div class="gallery-name"><?php the_sub_field('fotogallery-name'); ?></div>

										<?php if( have_rows('fotogallery-list') ): ?>
                                    	    <div class="gallery-item fade"">
                                                <?php while( have_rows('fotogallery-list') ): the_row(); ?>
                                    	        	<img class="fotogallery-img fade" src="<?php the_sub_field('fotogallery-img'); ?>" alt="">
										        <?php endwhile; ?>
                                    	    </div>
										<?php endif; ?>

										<?php if( have_rows('fotogallery-list') ): ?>
                                    	    <div class="gallery-item-titles">
										        <?php while( have_rows('fotogallery-list') ): the_row(); ?>	
                                    	        	<div><?php the_sub_field('fotogallery-img-name'); ?></div>
										        <?php endwhile; ?>
                                    	    </div>
							            <?php endif; ?>
                                    </div>
                                <?php endwhile; ?>
							    	<div class="control-container">
                                        <a class="arrow-control arrow-control-left" href="#" role="button"></a>
                                        <a class="arrow-control arrow-control-right" href="#" role="button"></a>        
                                    </div>
							    <?php endif; ?>
							</div>
		                </div><!-- end post  -->
		                
            
		            <?php endwhile; endif; ?>
               
				</div><!-- end post-content  -->
    		</div><!-- end mainpage-main  -->
    	</main>
    <!-- </div>end main  -->

<?php
get_footer();
