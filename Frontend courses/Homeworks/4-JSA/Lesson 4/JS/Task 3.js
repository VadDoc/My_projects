window.onload = function () {
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");
  const div3 = document.getElementById("div3");

  let arrLeftPos = new Array();
  let arrTopPos = new Array();

  for (i = 0; i < 1180; i++) {
    arrLeftPos = arrLeftPos.concat(i);
  }

  for (i = 0; i < 620; i++) {
    arrTopPos = arrTopPos.concat(i);
  }

  setInterval(() => {
    let leftPos1 = Math.floor(Math.random() * (arrLeftPos.length));
    div1.style.left = leftPos1 + "px";

    let topPos1 = Math.floor(Math.random() * (arrTopPos.length));
    div1.style.top = topPos1 + "px";

    let leftPos2 = Math.floor(Math.random() * (arrLeftPos.length));
    div2.style.left = leftPos2 + "px";

    let topPos2 = Math.floor(Math.random() * (arrTopPos.length));
    div2.style.top = topPos2 + "px";

    let leftPos3 = Math.floor(Math.random() * (arrLeftPos.length));
    div3.style.left = leftPos3 + "px";

    let topPos3 = Math.floor(Math.random() * (arrTopPos.length));
    div3.style.top = topPos3 + "px";
  }, 1000);
}