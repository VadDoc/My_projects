    window.onload = () => {
      // Вариант 1
      const userAdmin = {
        login: "admin",
        password: '12345',
      }
      let user = {};

      document.getElementById('submit').onclick = () => {
        user.login = document.getElementById('username').value;
        user.password = document.getElementById('password').value;

        let divText = document.getElementById('text');
        let divUserName = document.getElementById('username');
        let divPassword = document.getElementById('password');

        if (user.login == '') {
          divText.innerHTML = 'Вы не заполнили полe Логин';
          divText.style.color = 'red';
          divUserName.style.backgroundColor = 'rgb(255, 210, 210)';
          divPassword.style.backgroundColor = 'white';
        } else if (user.password == '') {
          divText.innerHTML = 'Вы не заполнили поле Пароль';
          divText.style.color = 'red';
          divPassword.style.backgroundColor = 'rgb(255, 210, 210)';
          divUserName.style.backgroundColor = 'white';
        } else if (userAdmin.login == user.login && userAdmin.password == user.password) {
          divText.innerHTML = 'Вы авторизовались';
          divText.style.color = 'green';
          divUserName.style.backgroundColor = 'white';
          divPassword.style.backgroundColor = 'white';
        } else {
          divText.innerHTML = 'Такого пользователя не существует';
          divText.style.color = 'red';
          divUserName.style.backgroundColor = 'white';
          divPassword.style.backgroundColor = 'white';
        }

        // Вариант 2

        // Почему не работает этот вариант? В отладчике с первого раза не считываются get данные.
        // Цикл заходит на второй круг и только потом начинает обрабатывать строку.
        // В этом варианте я в HTML менял type="button" кнопки на type="submit".

        // user.login = document.getElementById('username').value;
        // user.password = document.getElementById('password').value;

        // let string = location.search.substring(1);
        // let arrLoginPass = string.split("&");

        // for (let i = 0; i < arrLoginPass.length; i++) {
        //   let pos = arrLoginPass[i].indexOf('=');
        //   if (pos == -1) {

        //     let divText = document.getElementById('text');
        //     divText.innerHTML = 'Вы не заполнили поля Логин и Пароль';
        //     divText.style.color = 'red';
        //     let divUserName = document.getElementById('username');
        //     divUserName.style.backgroundColor = 'rgb(255, 210, 210)';
        //     let divPassword = document.getElementById('password');
        //     divPassword.style.backgroundColor = 'rgb(255, 210, 210)';
        //     continue;
        //   } else if (userAdmin.login == user.login && userAdmin.password == user.password) {
        //     let divText = document.getElementById('text');
        //     divText.innerHTML = 'Вы авторизовались';
        //     divText.style.color = 'green';
        //   }

        //   let argname = arrLoginPass[i].substring(0, pos); // Получение имени
        //   let value = arrLoginPass[i].substring(pos + 1); // Получение значения
        //   user[argname] = value; // Сохранение как свойства
        // }
      }
    }