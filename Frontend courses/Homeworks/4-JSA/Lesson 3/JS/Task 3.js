    // Задание 3. Калькулятор, используя регулярные значения
    window.onload = () => {
      let userMessage = prompt('Введите арифметическое действие со знаками +, -, * или /. Например:', '3+6');
      let patternMessage = /\d+[-*/+]\d+/;
      let patternNumbers = /\d+/g;
      let patternSign = /[-*/+]/;
      let arrNumbers = userMessage.match(patternNumbers);
      let arrSign = userMessage.match(patternSign);

      if (patternMessage.test(userMessage)) {
        if (arrSign[0] == '+') {
          document.write(
            `${arrNumbers[0]} ${arrSign[0]} ${arrNumbers[1]} = ${+arrNumbers[0] + +arrNumbers[1]}`
          );
        } else if (arrSign[0] == '-') {
          document.write(
            `${arrNumbers[0]} ${arrSign[0]} ${arrNumbers[1]} = ${+arrNumbers[0] - +arrNumbers[1]}`
          );
        } else if (arrSign[0] == '*') {
          document.write(
            `${arrNumbers[0]} ${arrSign[0]} ${arrNumbers[1]} = ${+arrNumbers[0] * +arrNumbers[1]}`
          );
        } else {
          document.write(
            `${arrNumbers[0]} ${arrSign[0]} ${arrNumbers[1]} = ${+arrNumbers[0] / +arrNumbers[1]}`
          );
        }
      } else {
        document.write('Вы неправильно ввели арифметическое действие');
      }
    }