<?php
if( get_field('lang') == 'RU' ) {
    $n_page_id = 7;
}
else  {
    $n_page_id = 2840;
}
?>

<?php if( have_rows('gallery-preveiw') ): ?>
    <div class="photo-gallery-preveiw">
        <div class="gallery-menu">
            <ul>
                <li class="gallery-menu-item"><?php the_field('gallery-preveiw-menu_1', $n_page_id); ?></li>
                <li class="gallery-menu-item"><?php the_field('gallery-preveiw-menu_2', $n_page_id); ?></li>
                <li class="gallery-menu-item"><?php the_field('gallery-preveiw-menu_3', $n_page_id); ?></li>
                <li class="gallery-menu-item"><?php the_field('gallery-preveiw-menu_4', $n_page_id); ?></li>
                <li class="gallery-menu-item"><?php the_field('gallery-preveiw-menu_5', $n_page_id); ?></li>
                <li class="gallery-menu-item"><?php the_field('gallery-preveiw-menu_6', $n_page_id); ?></li>
                <li class="gallery-menu-item"><?php the_field('gallery-preveiw-menu_7', $n_page_id); ?></li>
                <li class="gallery-menu-item"><?php the_field('gallery-preveiw-menu_8', $n_page_id); ?></li>
                <li class="gallery-menu-item"><?php the_field('gallery-preveiw-menu_9', $n_page_id); ?></li>
            </ul>
        </div>
    
        <div class="gallery-preview-container">
            <?php while( have_rows('gallery-preveiw') ): the_row(); 
    	        $name = get_sub_field('gallery-preveiw-name');
    	        $imgsrc = get_sub_field('gallery-preveiw-img');
                $link = get_sub_field('gallery-preveiw-link');
                $gallerynumber1 = get_sub_field('gallery-preveiw-gallery-number');
                $gallerynumber2 = get_sub_field('gallery-preveiw-gallery-number-2');
                $gallerynumber3 = get_sub_field('gallery-preveiw-gallery-number-3');
	            ?>
                <div class="gallery-preview-box img-prev-gallery-0 img-prev-gallery-<?php echo $gallerynumber1; ?> img-prev-gallery-<?php echo $gallerynumber2; ?> img-prev-gallery-<?php echo $gallerynumber3; ?>">
                    <picture><img class="" src="<?php echo $imgsrc; ?>" alt=""></picture>
                    <a class="gallery-preview-img-overlay" href="<?php echo $link; ?>">
                        <div><h4><?php echo $name; ?></h4></div>
                    </a>
                </div>
            <?php endwhile; ?>
        </div>
    </div>

<?php endif; ?>
