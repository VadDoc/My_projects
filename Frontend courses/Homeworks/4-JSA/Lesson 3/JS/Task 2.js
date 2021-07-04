window.onload = () => {
  //Задание 2
  let strSearch = document.location.search;
  // Например:
  strSearch = '?a=100&b=200';
  patern = /\d+/g;
  result = strSearch.match(patern);

  // Вариант 1 (если знаем, что 2 числа)
  // document.write(`сумма ${+result[0] + +result[1]}`);

  // Вариант 2 (универсальный, для любого количества чисел)
  arrSum = result.reduce((total, item) => total + +item, 0)
  document.write(`сумма ${arrSum}`);
}