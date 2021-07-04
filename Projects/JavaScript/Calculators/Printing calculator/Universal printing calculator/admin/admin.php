<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/admin.css">
    <script src="./js/admin.js?ver=<?php echo rand(1, 99); ?>"></script>
    <title>Document</title>
</head>
<body>
    <div class="first-container">
        <button class="btn new-product-btn">Создать новый продукт</button>
        <button class="btn change-product-btn">Изменить цены продукта</button>
        <button class="btn img-product-btn">Добавить изображение продукта</button>
    </div>
    <div class="main-container">
        <div class="header-products-container"></div>
        <div class="products-container"></div>
        <div class="tables-container"></div>
    </div>
</body>
</html>


