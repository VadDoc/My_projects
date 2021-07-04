<?php
if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
	$data=json_decode(stripslashes( $_POST['data']));

	$to       = "vadprudnikov@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
	$sendfrom = "info@callab.com.ua"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
	$headers  = "From: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "Reply-To: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "MIME-Version: 1.0\r\n";
	$headers  .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject  = "Заявка на телефонный разговор";
	$message  = "<h2>Заявка на телефонный разговор от корпоративного клиента</h2> " 
	          ."<br><b>Имя пославшего:</b> " . $data->name . "<br><b>Телефон:</b> " . $data->tel;
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