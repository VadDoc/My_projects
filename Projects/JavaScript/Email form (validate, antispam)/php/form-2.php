<?php
if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
	$data=json_decode(stripslashes( $_POST['data']));

	$to       = "vadprudnikov@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
	$sendfrom = "info@decor-company.com.ua"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
	$headers  = "From: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "Reply-To: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "MIME-Version: 1.0\r\n";
	$headers  .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject  = "Заявка на штукатурные работы";
	$message  = "<h2>Заявка на штукатурные работы</h2> " 
              ."<br><b>Имя пославшего:</b> " . $data->name . "<br><b>Телефон:</b> " . $data->tel
              ."<br>Получено разрешение на обработку персональных данных " 
              ."<br><br>Меня интересуют штукатурные работы (вид штукатурки: <b>" . $data->sht . "</b>)"
			  ."<br>Свяжитесь со мной, пожалуйста, по номеру телефона: " . $data->tel
			  ."<br><br>" . $data->name . "<br> - -"
			  ."<br>Это сообщение отправлено с сайта Студия «Ребров Декор» (https://decor-company.com.ua)";
	$send     = mail( $to, $subject, $message, $headers );
	if ( $send == 'true' ) {
		echo '<center><p class="success">Дякуємо за Ваше повідомлення!</p></center>';
	} else {
		echo '<center><p class="fail"><b>Помилка. Повідомлення не надіслане!</b></p></center>';
	}
} else {
	http_response_code( 403 );
	echo "Попробуйте еще раз";
}
?>