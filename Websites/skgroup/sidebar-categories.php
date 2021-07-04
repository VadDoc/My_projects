
<div class="sidebar-categoties">
    <div class="search"></div>
    <div class="categories">
        <div class="categories-box"></div>
    	<div class="categories-box">
    	    <h3 class="title left"><?php pll_e('РУБРИКИ'); ?></h3>
    	    <ul>
                <?php
                    $categories = get_categories(array(
                    	'orderby' => 'name',
                    	'order' => 'ASC'
                            )); ?>
        
                	<?php
                    foreach( $categories as $category ){
                    	echo '<li><a href="' . get_category_link( $category->term_id ) . '" title="' . sprintf( __( "View all posts in %s" ), $category->name ) . '" ' . '>' . $category->name.'</a> </li> ';
                    }
                ?>
            </ul>
    	</div>
    	<div class="categories-box">
    	    <h3 class="title left"><?php pll_e('СВЕЖИЕ КОММЕНТАРИИ'); ?></h3>
    	</div>
    	<div class="categories-box">
    	    <h3 class="title left"><?php pll_e('СВЕЖИЕ ЗАПИСИ'); ?></h3>
    	    <ul>
                <?php
                  $recent_posts = wp_get_recent_posts(5);
                  foreach($recent_posts as $post){
                	echo '<li><a href="' . get_permalink($post["ID"]) . '" title="'.$post["post_title"].'" >' .   $post["post_title"].'</a> </li> ';
                  } ?>
            </ul>
    	</div>
    </div>
    <div class="single-page-2-3"></div>
</div>
