<?php
if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
	$data=json_decode(stripslashes( $_POST['data']));

	$to       = "info@pearlspa.com.ua, koter@ukr.net"; /*Укажите адрес, куда должно приходить письмо*/
	$sendfrom = "info@pearlspa.com.ua"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
	$headers  = "From: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "Reply-To: " . strip_tags( $sendfrom ) . "\r\n";
	$headers  .= "MIME-Version: 1.0\r\n";
	$headers  .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject  = "Заказ с сайта «Жемчужина SPA»";
	$message  = "<h2>Заказ с сайта «Жемчужина SPA»</h2> " 
              ."<br>Имя пославшего: " . $data->name . "<br>Телефон: " . $data->tel;
    if ( $data->email ) $message  .= "<br>Email: " . $data->email;
	$message  .= "<br>Получено разрешение на обработку персональных данных ";
    $message  .= "<br><br>Меня интересует " . $data->serv;
    if ( $data->text ) $message  .= "<br><br>Сообщение: " . $data->text;
	$message  .= "<br><br>Свяжитесь со мной, пожалуйста, по номеру телефона: " . $data->tel;
	$message  .= "<br><br>" . $data->name . "<br> - -";
	$message  .= "<br>Это сообщение отправлено с сайта «Жемчужина SPA» (https://pearlspa.com.ua)";
	$send     = mail( $to, $subject, $message, $headers );
	if ( $send == 'true' ) {
		echo '<center><p class="success">Спасибо, мы Вам перезвоним</p></center>';
	} else {
		echo '<center><p class="fail">Ошибка. Сообщение не отослано!</p></center>';
	}
} else {
	http_response_code( 403 );
	echo "Попробуйте еще раз";
}
?>