<?php
/*
* Template name: test pay
*/

#настройки мерчанта

$partnerKey = "pearlspa.easypay";
$secretKey = "7vWBAlEYEH5l#JHu@Uv%T2BjR33WuTTG";
$serviceKey = "PEARLSPA";

#параметры платежа
$orderId = date("Ymd-His");
$description = strip_tags($_POST['description'])." от СПА Жемчуэина";
$amount = $_POST['amount'];

/*$urlSuccess = 'https://some-url.ua/success.php';
$urlFailed = 'https://some-url.ua/failed.php';*/

## ЗАПРОС 1: createApp
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL,"https://api.easypay.ua/api/system/createApp");
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, '');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = [
    'partnerKey:' . $partnerKey,
    'Content-Length: 0'
];

curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec ($curl);
curl_close ($curl);
        

# РАЗБОР ОТВЕТА createApp
$responseApp = json_decode($response);

$appId = $responseApp->appId;
$requestedSessionId = $responseApp->requestedSessionId;
$pageId = $responseApp->pageId;



## ЗАПРОС 2: createOrder
$requestParams = array(
    'order' => array(
        'serviceKey' => $serviceKey,
        'orderId' => $orderId,
        'description' => $description,
        'amount' => $amount),
        
        #urls - не обязательно
        'urls' => array(
            'success' => $urlSuccess,
            'failed' => $urlFailed,
        )    
);

$requestBody = json_encode($requestParams, JSON_UNESCAPED_SLASHES);

$sign = base64_encode((hash('sha256', $secretKey.$requestBody, 1)));

$headers = [
    'appId: ' . $appId,
    'requestedSessionId: ' . $requestedSessionId,
    'pageId: ' . $pageId,
    'partnerKey: ' . $partnerKey,
    'sign: ' . $sign,
    'Content-Type:application/json',
    'Content-Length: ' . strlen($requestBody)
];

$curl = curl_init('https://api.easypay.ua/api/merchant/createOrder');

curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $requestBody);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_TIMEOUT, 30);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec ($curl);
curl_close ($curl);


## РАЗБОР ОТВЕТА createOrder
$responseOrder = json_decode($response);

if (!($responseOrder->error)){
    
# РЕДИРЕКТ НА СТРАНИЦУ ОПЛАТЫ, если не ошибка, иначе - показать ответ с ошибкой
    $easyPayForwardUrl = $responseOrder->forwardUrl;
    header('Location: ' . $easyPayForwardUrl);
}else{
    echo "<pre> $response </pre>";
}

    ?>