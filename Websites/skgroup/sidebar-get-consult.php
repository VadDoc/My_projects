<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package skgroup
 */

// if ( ! is_active_sidebar( 'sidebar-1' ) ) {
// 	return;
// }
?>

<div class="consult pad-lr">
    <div class="consult-box flex">
        <div class="consult-box-1 flex">
            <h2><?php pll_e('ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ И ОЦЕНКУ ВАШЕГО ПРОЕКТА'); ?></h2>
        </div>
        <div class="consult-box-2">
            <form class="form-service-order-btn">
                <input type="hidden" value="<?php pll_e('Получить бесплатную консультацию и оценку проекта'); ?>" class="" />
                <input type="button" class="" value="<?php pll_e('ПОЛУЧИТЬ'); ?>">
                <input type="hidden" value="phone" class="" />
            </form>
        </div>
    </div>
</div>
