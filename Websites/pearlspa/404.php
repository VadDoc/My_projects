<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
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
                       

				<div class="page-404 violet">
			<!-- <p><span class="green-404">4</span><span class="violet-404">0</span><span class="green-404">4</span></p> -->
			<p>К сожалению, запрашиваемая страница не найдена</p>
			<p>Перейдите на другую страницю с помощью Меню</p>
			<p>или воспользуйтесь Поиском</p>

			<?php get_search_form(); ?>
		</div>
                
				</div><!-- end post-content  -->
    		</div><!-- end mainpage-main  -->
    	</main>
    </div><!-- end main  -->

<?php
get_footer();
