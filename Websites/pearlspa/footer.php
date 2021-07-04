<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pearlspa
 */

?>

	<footer id="colophon">
		<div class="footer flex">
			<a href="#">
			    <div class="footer-1 sprite"></div>
			</a>
			<div class="footer-2">
				<div class="footer-2-1">
			        <nav id="site-navigation" class="main-navigation">
		            	<?php
		            	wp_nav_menu(
		            		array(
		            			'theme_location' => 'menu-4',
		            			'menu_id'        => 'footer-menu-1',
		            		)
		            	);
		            	?>
		            </nav>
				</div>
				<div class="footer-2-2">
			        <nav id="site-navigation" class="main-navigation">
		            	<?php
		            	wp_nav_menu(
		            		array(
		            			'theme_location' => 'menu-5',
		            			'menu_id'        => 'footer-menu-2',
		            		)
		            	);
		            	?>
		            </nav>
				</div>
			</div>
			<div class="footer-4">
				<p>Звоните нам:</p>
				<p>044 258 43 82</p>
				<!-- <p><a href="">Заказать обратный звонок</a></p> -->

				<p class="">
				<form class="form-service-order-btn">
                    <input type="hidden" value="заказ обратного звонка" class="" />
                    <input type="hidden" value="Заказать обратный звонок" class="" />
                    <input type="button" class="call-button-footer" value="Заказать обратный звонок">
                </form>
				</p>
			</div>
			<div class="footer-5">
				<p>Центр красоты и здоровья</p>
				<p>Жемчужина SPA © 2021.</p>
				<p>Все права защищены.</p>
				<p><img class="" src="<?php echo get_template_directory_uri() . '/images/easypay.png' ?>"></p>
				<p><img class="" src="<?php echo get_template_directory_uri() . '/images/payment.png' ?>"></p>
			</div>
		</div>
	</footer>
</div>
<!-- <div class="callback-phone">
	<img class="form-service-order-btn" src="<?php echo get_template_directory_uri() . '/images/trubka.png' ?>">
</div> -->


<div class="callback-phone">
    <form class="form-service-order-btn">
        <input type="hidden" value="заказ обратного звонка" class="" />
        <input type="hidden" value="Заказать обратный звонок" class="" />
        <input type="button" class="call-button" value="">
    </form>
</div>

<div class="form-service flex">
        <form  action="" class="form-order-service" method="POST">
            <p class="form-service-title hide"></p>
            <label class="darkblue hide">* Ваше имя: <p><input name="name" type="text" value=""></p></label>
            <label class="darkblue hide">* Телефон: <p><input name="phone" type="text" value=""></p></label>
            <label class="label-hidden darkblue hide">E-mail: <p><input name="email" type="text" value=""></p></label>
            <label class="label-hidden darkblue hide">Примечания: <p><textarea name="info" maxlength="100"></textarea></p></label>
            <div class="all-wildes lightgrey clear hide"><sup>*</sup> - все поля обязательны для заполнения</div>
            <input type="checkbox" class="agree-box hide" value="1" /><span class="agree-text hide">Cогласие на обработку данных</span>
            <input type="button" value="Заказать" class="button hide" id="" />
			<input type="text" name="" id="anti-spam-order" class="anti-spam-service anti-spam hide" value="">
            <span id="error-mess-order" class="error-mess-service error-mess"></span>
        </form>
    </div>



<?php wp_footer(); ?>

</body>
</html>
