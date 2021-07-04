<?php if( have_rows('thinking-about-us') ): ?>
    <div class="thinking-about-us pad-lr bg-grey">
        <div class="thinking-about-us-title">
            <h2 class="title left"><?php the_field('thinking-about-us-title'); ?></h2>
        </div>
        <div class="slider">
            <div class="slider-wrapper">
                <?php while( have_rows('thinking-about-us') ): the_row(); ?>
                    <div class="slider-item">
                        <div class="slider-item-box bg-grey">
                            <div class="slider-item-text"><?php the_sub_field('thinking-about-us-text'); ?></div>
                            <div class="slider-item-name"><?php the_sub_field('thinking-about-us-name'); ?></div>
                            <div class="slider-item-img">&#11088; &#11088; &#11088; &#11088; &#11088;</div>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
            <a class="slider-control slider-control-left" href="#" role="button"></a>
            <a class="slider-control slider-control-right slider-control-show" href="#" role="button"></a>
        </div>
    </div>
<?php endif; ?>