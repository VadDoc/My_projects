<?php
/**
 * The template for services-page
 * Template Name: Услуги
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package zemurist
 */

get_header('simple');
?>

<div class="container-fluid main">
	<main id="primary" class="site-main">
		<div class="large-image-container-service" style="background-image: url(<?php the_field('background_service', 47); ?>)">
			<div class="container large-image-container-content">
				<h1><?php the_field('stroka_1'); ?><br><?php the_field('stroka_2'); ?><br><?php the_field('stroka_3'); ?></h1>
			</div>
		</div>
    </main>
</div>
<div class="container content-service">
	<div class="row">
	    <?php if( get_field('price_services') || get_field('documents') ): ?>
		<div class="col-12 col-md-6 col-lg-7">
		<?php else: ?>
		<div class="col-12">	
		<?php endif; ?>	
		    <div class="content-service-left">
		        <?php while ( have_posts() ){
		         the_post(); ?>
		         <div class="">
		     	  <?php the_content(); ?>
		     	</div>
                <?php }; ?>
			</div>
		</div>
		<?php if( get_field('price_services') || get_field('documents') ): ?>
	    <div class="col-12 col-md-6 col-lg-5 ">
			<div class="content-service-right">
				<div class="content-service-right-title">
					<div class="content-service-right-logo">
					    <?php if( get_field('price_services_logo') ): ?>
                            <img class="content-service-right-img" src="<?php the_field('price_services_logo'); ?>" />
                        <?php endif; ?>
					</div>
					<div class="content-service-right-text">
					    <?php the_field('price_services_title_1'); ?><br><?php the_field('price_services_title_2'); ?>
					</div>
				</div>
				<?php if( have_rows('price_services') ): ?>
                    <div class="content-service-right-table">
					    <table class="table-service">
						    <tbody>
                                <?php while( have_rows('price_services') ): the_row(); 
                                	$priceServiceName = get_sub_field('price_services_name');
                                	$priceServicePrice = get_sub_field('price_services_price');
								?>
								    <tr>
								    	<td>
										    <?php if( $priceServiceName ): ?>
                                		    	<?php echo $priceServiceName; ?>
                                		    <?php endif; ?>
										</td>
								    	<td>
										    <?php if( $priceServicePrice ): ?>
                                		    	<?php echo $priceServicePrice; ?>
                                		    <?php endif; ?>
										</td>
								    </tr>        
					        	<?php endwhile; ?>
					         </tbody>
						</table>
                    </div>
                <?php endif; ?>
                <?php if( have_rows('documents') ): ?>
					<div class="content-service-right-title">
						<div class="content-service-right-logo">
							<?php if( get_field('documents_logo') ): ?>
                                <img class="content-service-right-img" src="<?php the_field('documents_logo'); ?>" />
                            <?php endif; ?>
						</div>
						<div class="content-service-right-text">
						    <?php the_field('documents_title_1'); ?><br><?php the_field('documents_title_2'); ?>
						</div>
					</div>
                    <div class="content-service-right-table">
                        <?php while( have_rows('documents') ): the_row(); 
                        	$documentName = get_sub_field('document_name');
                        	$documentLink = get_sub_field('document_link');
                        ?>
                          	<?php if( $documentLink ): ?>
                          		<a href="<?php echo $documentLink; ?>">
                          	<?php endif; ?>
                          	    <?php echo $documentName; ?>
                          	<?php if( $documentLink ): ?>
                          		</a>
                          	<?php endif; ?>
                        <?php endwhile; ?>
                    </div>
                <?php endif; ?>
			</div>
		</div>
       <?php endif; ?>
	</div>
	<div class="row">
		<div class="col-12">
		    <?php if( have_rows('other_services') ): ?>
		        <div class="title-cards">
			        <?php the_field('other_service_title'); ?>
		        </div>
			    <div class="green-line"></div>
			<?php endif; ?>
		</div>
		<div class="col-12">
			<div class="container-carusel">
				<?php if( have_rows('other_services') ): ?>		
				<div class="container-arr-left-3 arr-left"></div>
                    <div class="container-other-services">
                        <?php while( have_rows('other_services') ): the_row(); 
                        	$servicename = get_sub_field('service_name');
                        	$servicelink = get_sub_field('service_link');
						?>
						    <div class="other-service">
                        		<?php if( $servicelink ): ?>
                        			<a href="<?php echo $servicelink; ?>">
                        		<?php endif; ?>
                        		    <?php echo $servicename; ?>
                        		<?php if( $servicelink ): ?>
                        			</a>
								<?php endif; ?>
							</div>	
                        <?php endwhile; ?>
                    </div>
				<div class="container-arr-right-3 arr-right"></div>
                <?php endif; ?>				
			</div>
		</div>
	</div>
</div>


<?php
get_footer();
