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

<div class="container-fluid main">
	<main id="primary" class="site-main">
		<div class="large-image-container" style="background-image: url(<?php the_field('background_main'); ?>)">
			<div class="container large-image-container-content">
				<h1><?php the_field('stroka_1'); ?><br><?php the_field('stroka_2'); ?><br><?php the_field('stroka_3'); ?></h1>
			</div>
		</div>
		<div class="container">
		    <?php if( have_rows('card_1') ): ?>
			<div class="title-cards">
			     <?php the_field('card_1_title'); ?>
			</div>
			<div class="green-line"></div>
			<div class="container-carusel">
			<?php if( have_rows('card_1') ): ?>	
            <div class="container-arr-left-1 arr-left"></div>
			<div class="container-cards">	
					<?php while( have_rows('card_1') ): the_row(); 
						$card1Name1 = get_sub_field('card_1_name_1');
						$card1Name2 = get_sub_field('card_1_name_2');
                        $card1Name3 = get_sub_field('card_1_name_3');
						$card1Link = get_sub_field('card_1_link');
						$card1Logo = get_sub_field('card_1_logo');
                    ?>
				         <div class="card-1">
						    <?php if( $card1Link ): ?>
				         	<a href="<?php echo $card1Link; ?>">
							 <?php endif; ?>
				         	<div class="card-1-img-container">
							   <?php if( $card1Logo ): ?>
                                  <img class="card-1-img" src="<?php echo $card1Logo; ?>" />
                               <?php endif; ?>
				         	</div>
				         	<div class="card-1-text">
							   <?php echo $card1Name1; ?><br><?php echo $card1Name2; ?><br><?php echo $card1Name3; ?>
							 </div>
							<?php if( $card1Link ): ?>
							 </a>
							 <?php endif; ?>
				         </div>
				    <?php endwhile; ?>
				<?php endif; ?>
				</div>
				<div class="container-arr-right-1 arr-right"></div>
				<?php endif; ?>
				<a name="consult"></a>
			</div>
			<div class="container-form">
				<div class="form-title"><?php the_field('get_consult'); ?></div>
				<div class="form-body">
				    <form action="" method="post" id="mailForm" name="mailForm">
                        <input type="text" id="name" name="name" placeholder="Укажите имя" class="form-control">
                        <input type="text" id="tel" name="tel" placeholder="Укажите номер телефона" class="form-control">
                        <textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Напишите сообщение"></textarea>
                        <button type="button" id="send-mail" name="button" class="btn btn-success">Отправить</button>
                        <input type="text" name="" id="anti-spam" value="">

                    </form>
				    <div id="error-mess"></div>
					<!-- <?php echo do_shortcode('[contact-form-7 id="126" title="Бесплатная консультация"]'); ?> -->
				</div>
			</div>
		    <?php if( have_rows('card_2') ): ?>
			<div class="title-cards">
			    <?php the_field('card_2_title'); ?>
			</div>
			<div class="green-line"></div>

			<div class="container-carusel">
				<?php if( have_rows('card_2') ): ?>		
                <div class="container-arr-left-2 arr-left"></div>
			    <div class="container-cards">
					<?php while( have_rows('card_2') ): the_row(); 
					    $card2Logo = get_sub_field('card_2_logo');
						$card2Name = get_sub_field('card_2_name');
						$card2Text = get_sub_field('card_2_text');
                    	$card2Link = get_sub_field('card_2_link');
					?>
					    <div class="card-2">
					       <div class="card-2-img-container">
					           <img class="card-2-img" src="<?php echo $card2Logo ?>">
						   </div>
						   <div class="card-2-text">
						       <?php if( $card2Link ): ?>
							   <a href="<?php echo $card2Link ?>">
							   <?php endif; ?>
						          <div class="card-2-text-title"><?php echo $card2Name ?></div>
								  <div class="card-2-text-par"><?php echo $card2Text ?></div>
							   <?php if( $card2Link ): ?>
							   </a>
							   <?php endif; ?>
					       </div>
						</div>	
                    <?php endwhile; ?>
                <?php endif; ?>
                </div>
				<div class="container-arr-right-2 arr-right"></div>
				<?php endif; ?>
            </div>
            <div class="container-content">
            <div class="green-line"></div>
                <?php while ( have_posts() ){
		             the_post(); ?>
		             <div class="user-content">
		         	  <?php the_content(); ?>
		         	 </div>
                <?php }; ?>
            </div>
		</div>
	</main>
</div>



<?php
get_footer();
