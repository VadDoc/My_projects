<?php
/**
 * The template for services-page
 * Template Name: Контакты
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package zemurist
 */

get_header('simple');
?>

		<div class="container content-contact">
			<div class="row">
					<div class="col-12 col-lg-5">
					    <div class="content-contact-left">
                            <h1><?php wp_title(); ?></h1>
                        </div>
                        <?php while ( have_posts() ){
		                     the_post(); ?>
		                     <div class="user-content">
		                 	  <?php the_content(); ?>
		                 	 </div>
                        <?php }; ?>

					</div>
					<div class="col-12 col-lg-7">
						<div class="content-contact-right">
                            <div class="container-form form-contact">
								<div class="form-title">Обратная связь</div>
								<div class="form-body">
				                    <form action="" method="post" id="mailForm" name="mailForm">
                                        <input type="text" id="name" name="name" placeholder="Укажите имя" class="form-control">
                                        <input type="text" id="email" name="email" placeholder="Укажите email" class="form-control">
                                        <textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Напишите сообщение"></textarea>
                                        <button type="button" id="send-mail" name="button" class="btn btn-success">Отправить</button>
                                        <input type="text" name="" id="anti-spam" value="">
                
                                    </form>
				                    <div id="error-mess"></div>
				                </div>

		                	</div>
						</div>
					</div>
			</div>
			<a name="map"></a>

			<div class="row">
				<div class="col-12">
			        <!-- <div class="title-cards">
			        </div>
                    <div class="green-line"></div> -->
					<!-- <a name="map"></a> -->

                    <div class="container-map">
                        <?php the_field('map'); ?>
                    </div>
				</div>
			</div>
		</div>
<?php
get_footer();
