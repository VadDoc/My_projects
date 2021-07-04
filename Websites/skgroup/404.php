<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package skgroup
 */

get_header();
?>

<div class="main">
    <!-- <?php get_sidebar( 'page-title' ); ?> -->
	<main class="site-main 404-page bg-grey">
	    <div class="page-404 flex pad-lr">
			<p><span class="green-404">4</span><span class="violet-404">0</span><span class="green-404">4</span></p>
			<p>К сожалению, запрашиваемая страница не найдена</p>
			<p>Перейдите на другую страницю с помощью Меню</p>
			<p>или воспользуйтесь Поиском</p>

			<?php get_search_form(); ?>
		</div>

	</main>

</div>

<?php
get_footer();
