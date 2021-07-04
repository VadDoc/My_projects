<?php // на какие данные рассчитан этот скрипт 
header("Content-Type: application/json"); 
// 1. Получаем данные от страницы 
$data = json_decode(file_get_contents("php://input")); 
// 2. Проверяем, есть ли на сервере нужный нам файл с данными — json.data. 
// Берём новую переменную и пишем в неё имя файла 
$filename = 'data-3.json'; 
// 3. Если есть — запоминаем его содержимое, а если такого файла нет — создаём его отдельной командой. 
if (file_exists($filename)) { 
    // Если файл есть — открываем его и читаем данные 
    $file = file_get_contents('data-3.json'); 
    // Если такого файла нет… 
} else { 
    // …то создаём его сами 
    $file = fopen("data-3.json", "a+"); 
} 
// 4/ Всё, что было в этом файле, переводим в массив, с которым умеет работать PHP. 
//Таким способом у нас каждая JSON-запись будет храниться в отдельной ячейке массива. 
// $taskList = json_decode($file, true); 
// 5. Добавляем новую запись в этот массив — кладём в него то, что пришло со страницы. 
// $taskList[] = array($data); 

$file = $data;

// 6. Записываем это всё обратно в файл и тут же читаем обратно из него — так мы убедимся, 
//что запись прошла нормально и мы можем с этим работать. 
// Записываем данные в файл… 
// file_put_contents('data-3.json', json_encode($file)); 
file_put_contents('data-3.json', json_encode($file, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)); 
// …и сразу считываем их обратно 
$file = file_get_contents('data-3.json'); // Открыть файл data-3.json 
// 7. Отправляем всё содержимое файла на страницу, чтобы там увидеть, что сервер работает как нужно. 
echo $file; 
// Освобождаем память от переменных, которые нам пока не нужны 
unset($file); 
// unset($taskList);