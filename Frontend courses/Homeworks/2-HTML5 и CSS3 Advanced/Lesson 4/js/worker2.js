addEventListener("message", function (event) {
  let workerResult = +event.data[0] - +event.data[1];
  setTimeout(() => {
    postMessage(`${event.data[0]} - ${event.data[1]} = ${workerResult}`); 
}, 2000);
}, false)
