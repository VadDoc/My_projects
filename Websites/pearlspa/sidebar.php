<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pearlspa
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area">
	<!-- <?php dynamic_sidebar( 'sidebar-1' ); ?> -->




	<div class="sidebar-left-1">Наши услуги</div>
	<div class="sidebar-left-2">
	    <nav id="services-navigation" class="">
	    	<?php
	    	wp_nav_menu(
	    		array(
	    			'theme_location' => 'menu-2',
	    			'menu_id'        => 'services-menu',
	    		)
	    	);
	    	?>
	    </nav>
	</div>
	<div class="sidebar-left-1">Готовые программы</div>
	<div class="sidebar-left-2">
	    <nav id="services-navigation" class="">
	    	<?php
	    	wp_nav_menu(
	    		array(
	    			'theme_location' => 'menu-3',
	    			'menu_id'        => 'programs-menu',
	    		)
	    	);
	    	?>
	    </nav>
	</div>
	<div class="sidebar-left-1"><a href="/category/blog/">Блог</a></div>
	<div class=search-sidebar>
	    <form action="<?php echo site_url(); ?>">
            <input type="text" id="s" name="s" placeholder="поиск на сайте" value="" />
            <button>&nbsp;</button>
		</form>			
	</div>
	<div class="order-form-container flex">
			
	    <div class="order-form">
	        <span class="title">Форма бронирования услуг</span>
			<div id="success-container"></div>
            <form action="" id="order-service-sidebar" method="POST">
                <input type="text" name="name" placeholder="Ваше имя *">
                <input type="text" name="phone" placeholder="Номер телефона *">
                <textarea placeholder="Услуги *" name="services"></textarea>
                <input type="date" name="date" placeholder="Дата *" id="datepicker">
	    		<p>
	    		   <span class="lbl">Время *</span><input name="time_1" class="small" type="number" placeholder="Час">
	    		   <span class="sep">:</span><input name="time_2" class="small" type="number" placeholder="Мин">
	    		</p>
	    		<input type="checkbox" class="agree-box" value="1" /><span class="agree-text">Cогласие на обработку данных</span>
	    		<input type="button" value="Заказать" class="button-order" id="" />
	    		<div></div
	    		<input type="hidden" value="Главная форма бронирования услуг">
	    		<input type="text" name="" id="anti-spam-order" class="anti-spam" value="">
	    	</form>
		    <div id="error-mess-order" class="error-mess"></div>
	    </div>

	</div>

</aside><!-- #secondary -->
