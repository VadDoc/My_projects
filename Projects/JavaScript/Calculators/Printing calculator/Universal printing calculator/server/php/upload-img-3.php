<?php
 $blacklist = array(".php", ".phtml", ".php3", ".php4");
 foreach ($blacklist as $item) {
  if(preg_match("/$item\$/i", $_FILES['userfile']['name'])) {
   echo "Мы не разрешаем загружать файлы PHP\n";
   exit;
   }
  }

 $imageinfo = getimagesize($_FILES['userfile']['tmp_name']);
 if($imageinfo['mime'] != 'image/gif' && $imageinfo['mime'] != 'image/jpeg' && $imageinfo['mime'] != 'image/png') {
  echo "Извините, мы принимаем только изображения в формате GIF, JPEG и PNG\n";
  exit;
 }

 $uploaddir = '../../server/uploads/';
 $uploadfile = $uploaddir . basename('img-3.png');
 
 if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
   echo "Файл был успешно загружен.\n";
 } else {
   echo "Ошибка при загрузке файла.\n";
 }
?>