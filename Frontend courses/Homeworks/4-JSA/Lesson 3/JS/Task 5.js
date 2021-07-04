    // Задание 5. Бегущая строка
    window.onload = () => {
      function runString() {
        const strUserMessage = prompt('Введите сообщение до 30 знаков', 'Привет, меня зовут Николай');
        let arrUserMessage = strUserMessage.split('');
        // Делаю массив, чтобы до 29 индекса все элементы былы заполнены при любом вводе в prompt 
        // (иначе строка ввыводит underfinded)
        let arrEmpty = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
          '', '', '', '', '', '', ''
        ];
        arrUserMessage = arrUserMessage.concat(arrEmpty);

        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[0]}'`, 1000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[1]}'`, 1500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[2]}'`, 2000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[3]}'`, 2500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[4]}'`, 3000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[5]}'`, 3500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[6]}'`, 4000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[7]}'`, 4500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[8]}'`, 5000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[9]}'`, 5500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[10]}'`, 6000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[11]}'`, 6500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[12]}'`, 7000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[13]}'`, 7500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[14]}'`, 8000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[15]}'`, 8500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[16]}'`, 9000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[17]}'`, 9500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[18]}'`, 10000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[19]}'`, 10500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[20]}'`, 11000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[21]}'`, 11500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[22]}'`, 12000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[23]}'`, 12500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[24]}'`, 13000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[25]}'`, 13500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[26]}'`, 14000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[27]}'`, 14500)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[28]}'`, 15000)
        setTimeout(`document.getElementById("runStringMessage").innerHTML += '${arrUserMessage[29]}'`, 15500)
      }
      runString();
    }