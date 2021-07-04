<?php
/**
 * The template for front-page
 * Author: Prudnikov Vadym
 * Author telegram: @VadDomovoy
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package zemurist
 */

get_header();
?>

<div class="main">
	<main id="primary" class="site-main flex">
		<div class="sidebar-left">
		    <?php get_sidebar(); ?>
		</div>
		<div class="mainpage-main">
			<div class="mainpage-main-1">
				<div class="mainpage-main-1-box">
				    <?php
					$categories = get_categories( [
						'taxonomy'     => 'category', //Название таксономии
						'type'         => 'post', //Тип категорий, которые будут получены (post/link)
						'child_of'     => '12', //Получить все дочерние категории по ID
						'parent'       => '', //Получить дочерние категории по ID первого уровня вложенности
						'orderby'      => 'id', //Сортировка полученных данных по определенным критериям
						'order'        => 'ASC', //Направление сортировки, указанной в параметре "orderby" (ASC/DESC)
						'hide_empty'   => 1, //Получать или нет пустые категории (0/1)
						'hierarchical' => 1, //Если true, то в результат будут включены пустые дочерние категории
						'exclude'      => '', //Исключить какие-либо категории из списка по ID или массив
						'include'      => '14, 15, 16, 17, 18, 19, 20, 22, 23', //Вывести списком только указанные категории  по ID или массив
						'number'       => 0, //Лимит. Число категорий, которые будут получены
						'pad_counts'   => false,
					] );
				    foreach($categories as $category) { ?>
				    	<div class="divider"></div>
				    	<div class="block">
				    		<div class="block-title">Готовые спа-программы <a href="<?php echo get_category_link( $category->cat_ID ); ?>"><?php echo $category->name; ?></a></div>
				    		<div class="block-container flex">
				    		    <?php 
				    		    global $post;
				    		    $args = array( 'posts_per_page' => 3, 'category' => $category->cat_ID );//Привьшки элементов программы 
				    		    $previews = get_posts( $args );
				        
				    		    foreach ($previews as $key => $preview) : ?>
                                    <div class="progr">
				    		    		<?php 
				    		    		$new = get_post_custom_values('new', $preview->ID); 
				    		    		if ($new[0] == '1') {
				    		    		?>
				    		    		    <div class="new"></div>
				    		    		<?php } ?>
				    		    		<?php 
				    		    		$hit = get_post_custom_values('hit', $preview->ID); 
				    		    		if ($hit[0] == '1') {
				    		    		?>
				    		    		    <div class="hit"></div>
				    		    		<?php } ?>
				    		    		<div class="progr-card">
                                    		<a href="<?php echo get_permalink( $previews[$key]->ID ); ?>">
				    		    				<?php echo get_the_post_thumbnail( $previews[$key]->ID ); ?>
                                    			<div class="progr-card-title"><?php echo $previews[$key]->post_title; ?></div>
                                    		</a>
                                    	</div>
                                    </div> <!-- end progr -->
				    		    <?php endforeach; ?>
				    		</div> <!-- end mainpage-main-1-box-container -->
				    	</div> <!-- end block -->
				    <?php	} ?>
			    </div> <!-- end mainpage-main-1-box -->
			    <div class="mainpage-main-2">
			    	<?php the_content(); ?>
    
			    </div>

		    </div><!-- end mainpage-main-1 -->
	    </div><!-- end mainpage-main -->
	</main>
</div><!-- end main -->



<?php
get_footer();
