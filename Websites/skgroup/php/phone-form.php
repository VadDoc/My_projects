<?php
if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
	$data=json_decode(stripslashes( $_POST['data']));

	$to       = "vadprudnikov@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
	$sendfrom = "info@sk-group.kiev.ua"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
	$headers  = "From: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "Reply-To: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "MIME-Version: 1.0\r\n";
	$headers  .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject  = "Заявка на консультацию";
	$message  = "<h2>Заявка на " . $data->about . "</h2> "
              ."<br><b>Имя пославшего:</b> " . $data->name
              ."<br>Получено разрешение на обработку персональных данных " 
			  ."<br>Свяжитесь со мной, пожалуйста, по номеру телефона: " . $data->email
			  ."<br><br>" . $data->name . "<br> - -"

			  ."<br>Это сообщение отправлено с сайта  «SK Group» (https://sk-group.kiev.ua/)";
	$send     = mail( $to, $subject, $message, $headers );
	if ( $send == 'true' ) {
		echo '<center><p class="success">Благодарим за Ваше сообщение!</p></center>';
	} else {
		echo '<center><p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p></center>';
	}
} else {
	http_response_code( 403 );
	echo "Попробуйте еще раз";
}
?>