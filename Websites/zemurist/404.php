<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package zemurist
 */

get_header();
?>

<div class="container">
		<div class="page-404 violet">
			<p><span class="green-404">4</span><span class="violet-404">0</span><span class="green-404">4</span></p>
			<p>К сожалению, запрашиваемая страница не найдена</p>
			<p>Перейдите на другую страницю с помощью Меню</p>
			<p>или воспользуйтесь Поиском</p>

			<?php get_search_form(); ?>
		</div>
</div>

<?php
get_footer();
