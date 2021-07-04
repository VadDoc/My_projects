<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package skgroup
 */
?>

<form action="" method="post" class="mail-form order-form" name="mailForm">
    <p>
        <input type="text" id="name" name="name" placeholder="<?php pll_e('Имя'); ?>" class="small">
        <input type="text" id="email" name="email" placeholder="E-mail" class="small">
    </p>
    <p><input type="text" id="" name="name" placeholder="<?php pll_e('Тема'); ?>" class="large"></p>
    <p><textarea name="message" id="message" cols="30" rows="4" class="large" placeholder="<?php pll_e('Сообщение'); ?>"></textarea></p>  
    <p><input type="checkbox" name="" value="1" class="checkbox" /><span class=""><?php pll_e('Согласие на обработку данных'); ?></span></p>
    <p><input type="button" value="<?php pll_e('ОТПРАВИТЬ'); ?>" class="button" id="" /></p>
    <p><input type="text" name="" id="anti-spam-order" class="anti-spam" value=""></p>
    <input type="hidden" name="" id="form-flag" class="" value="mail">
    <input type="hidden" name="" id="" class="" value="<?php the_title(); ?>">

    <div id="error-mess-order" class="error-mess"></div>
</form>
