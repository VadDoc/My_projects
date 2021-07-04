window.onload = () => {
  const button = document.getElementById('button');
  const arrDiv = document.getElementsByTagName('div');

  let counter = 0;
  // Решил сделать без цикла for, ведь каждый клик и есть часть цикла со своим счетчиком.
  // Работает беспрерывно
  button.onclick = () => {
    arrDiv[arrDiv.length - 1].className = 'green';
    arrDiv[counter].className = 'red';

    if (counter > 0) {
      arrDiv[counter - 1].className = 'green';
    }
    counter++;

    if (counter == 5) {
      arrDiv[counter - 1].className = 'red';
      counter = 0;
    }
  }
}