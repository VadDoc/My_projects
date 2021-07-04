<?php
/**
 * The template for page-contacts
 * Template Name: Контакты 
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
		            	<h1 class="darkblue"><?php the_title(); ?></h1>
						<a name="contact"></a>
		            	<div class="entry contacts">
		            		<div id="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.9890602552573!2d30.487472915639856!3d50.38540247946644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8c221448e29%3A0xf7c351ad50c3c4ee!2z0JPQvtC70L7RgdC10LXQstGB0LrQuNC5INC_0YDQvtGB0L8uLCA4OSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1607429283266!5m2!1sru!2sua" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>    
                            </div>
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
