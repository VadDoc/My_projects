<?php
if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
	$data=json_decode(stripslashes( $_POST['data']));

	$to       = "info@pearlspa.com.ua, koter@ukr.net"; /*Укажите адрес, куда должно приходить письмо*/
	$sendfrom = "info@pearlspa.com.ua"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
	$headers  = "From: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "Reply-To: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "MIME-Version: 1.0\r\n";
	$headers  .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject  = "Бронирование услуг";
	$message  = "<h2>Бронирование услуг</h2> " 
			  ."<br>Имя пославшего: " . $data->name . "<br>Телефон: " . $data->tel
			  ."<br>Сообщение отправлено: " . $data->form
			  ."<br>Получено разрешение на обработку персональных данных "
			  ."<br><br>Меня интересуют следующие услуги: " . $data->serv
			  ."<br>Дата: " . $data->date
              ."<br>Время: " . $data->hour . " : " . $data->min
			  ."<br>Свяжитесь со мной, пожалуйста, по номеру телефона: " . $data->tel
			  ."<br><br>" . $data->name . "<br> - -"
			  ."<br>Это сообщение отправлено с сайта «Жемчужина SPA» (https://pearlspa.com.ua)";
	$send     = mail( $to, $subject, $message, $headers );
	if ( $send == 'true' ) {
		echo '<center><p class="success">Спасибо за Ваше сообщение!</p></center>';
	} else {
		echo '<center><p class="fail">Ошибка. Сообщение не отправлено!</p></center>';
	}
} else {
	http_response_code( 403 );
	echo "Попробуйте еще раз";
}
?>