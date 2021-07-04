    // Задание 4. Открытие и закрытие окна по клику ссылки
    window.onload = function () {
      const linkLesson1 = document.getElementById("linkLesson1");
      const paragraphLesson1 = document.getElementById("paragraphLesson1");
      let windLesson1;

      paragraphLesson1.onclick = openWindLesson1;

      function openWindLesson1() {
        linkLesson1.innerHTML = 'JS Урок 1 - открыт';
        linkLesson1.setAttribute("href", "javascript:closeWindLesson1()");
        windLesson1 = window.open("./lesson1.html", "Lesson 1",
          "width=400,height=400,status=yes,resizable=no,left=500,top=300");
        paragraphLesson1.onclick = closeWindLesson1;
      }

      function closeWindLesson1() {
        windLesson1.close();
        linkLesson1.innerHTML = 'JS Урок 1';
        linkLesson1.setAttribute("href", "javascript:openWindLesson1()");
        paragraphLesson1.onclick = openWindLesson1;
      }
      // ---------------------------------

      const linkLesson2 = document.getElementById("linkLesson2");
      const paragraphLesson2 = document.getElementById("paragraphLesson2");
      let windLesson2;

      paragraphLesson2.onclick = openWindLesson2;

      function openWindLesson2() {
        linkLesson2.innerHTML = 'JS Урок 2 - открыт';
        linkLesson2.setAttribute("href", "javascript:closeWindLesson2()");
        windLesson2 = window.open("./lesson2.html", "Lesson 1",
          "width=400,height=400,status=yes,resizable=no,left=500,top=300");
        paragraphLesson2.onclick = closeWindLesson2;
      }

      function closeWindLesson2() {
        windLesson2.close();
        linkLesson2.innerHTML = 'JS Урок 2';
        linkLesson2.setAttribute("href", "javascript:openWindLesson2()");
        paragraphLesson2.onclick = openWindLesson2;
      }
      // ---------------------------------

      const linkLesson3 = document.getElementById("linkLesson3");
      const paragraphLesson3 = document.getElementById("paragraphLesson3");
      let windLesson3;

      paragraphLesson3.onclick = openWindLesson3;

      function openWindLesson3() {
        linkLesson3.innerHTML = 'JS Урок 3 - открыт';
        linkLesson3.setAttribute("href", "javascript:closeWindLesson3()");
        windLesson3 = window.open("./lesson3.html", "Lesson 3",
          "width=400,height=400,status=yes,resizable=no,left=500,top=300");
        paragraphLesson3.onclick = closeWindLesson3;
      }

      function closeWindLesson3() {
        windLesson3.close();
        linkLesson3.innerHTML = 'JS Урок 3';
        linkLesson3.setAttribute("href", "javascript:openWindLesson3()");
        paragraphLesson3.onclick = openWindLesson3;
      }
    }