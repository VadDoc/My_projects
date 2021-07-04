<div class="main-page-form flex">  
    <form action="" method="post" class="order-form" name="orderForm">
        <p class="main-page-form-box-title"><?php pll_e('Заказать консультацию'); ?></p>
        <p>
            <input type="text"  placeholder="<?php pll_e('Имя'); ?>">
            <input type="text" placeholder="Email">
        </p>
        <p>
            <input type="text" placeholder="<?php pll_e('Тема'); ?>">
        </p>
        <p>
            <textarea name="" id="" cols="30" rows="10" placeholder="<?php pll_e('Сообщение'); ?>"></textarea>
        </p>
        <p>
            <label>
                <input type="checkbox" name="" value="1" />
            </label>
        </p>
        <p>
            <input type="button" value="<?php pll_e('ОТПРАВИТЬ'); ?>" class="" id="" />
        </p>
            <input type="text" name="" id="anti-spam-order" class="anti-spam" value="">
            <input type="hidden" name="" id="form-flag" class="form-flag" value="mail">
            <input type="hidden" name="" id="" class="" value="<?php the_title(); ?>">

            <div id="error-mess-order" class="error-mess"></div>
    </form>
</div>
