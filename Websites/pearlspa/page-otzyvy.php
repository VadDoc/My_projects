<?php
/**
 * The template for page-otzyvy
 * Template Name: Отзывы 
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
    
				    			<h1><?php the_title(); ?></h1>
    
				    	 
    
				    			<div class="entry">
    
				    				<?php the_content(); ?>
    
				    				<?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
    
				    			</div>
    
				    		</div>
				    		
				    		<?php comments_template(); ?>
    
				    <?php endwhile; endif; ?>
                
				</div><!-- end post-content  -->
    		</div><!-- end mainpage-main  -->
    	</main>
    </div><!-- end main  -->

<?php
get_footer();
