<?php
if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
	$data=json_decode(stripslashes( $_POST['data']));

	$to       = "hep@zemelnij-advokat.ru, koter@ukr.net"; /*Укажите адрес, га который должно приходить письмо*/
	$sendfrom = "info@zemelnij-advokat.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
	$headers  = "From: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "Reply-To: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "MIME-Version: 1.0\r\n";
	$headers  .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject  = "Заявка на бесплатную консультацию";
	$message  = "<h2>Заявка на бесплатную консультацию</h2> " 
              . "<br><b>От:</b> " . $data->name . "<br><b>Телефон:</b> " . $data->tel
              . "<br>- -<br><br>Сообщение:<br><br>" . $data->mes
              . "<br><br>- -<br>Это сообщение отправлено с сайта <a href='https://zemelnij-advokat.ru/'>Земельный юрист</a>";
	$send     = mail( $to, $subject, $message, $headers );
	if ( $send == 'true' ) {
		echo '<center><p class="success">Спасибо за Ваше сообщение!</p></center>';
	} else {
		echo '<center><p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p></center>';
	}
} else {
	http_response_code( 403 );
	echo "Попробуйте еще раз";
}
?>