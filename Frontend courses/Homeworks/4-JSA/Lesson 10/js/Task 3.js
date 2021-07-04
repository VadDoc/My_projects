window.addEventListener('load', init, false);

function init() {
  getInfo("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
  getInfo('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f')
  getInfo('http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f')
}

function getInfo(url) {
  fetch(url)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {

      console.log(data);
      formInfo(data);
      // getWindDirect(data.wind.deg)
    })
}

// let windDir;

// function getWindDirect(x) {
// if(x > 22.5 && x < 67.5) windDir = 'n-y';
// else if(x >= 67.6 && x < 112.5) windDir = 'y';
// else if(x >= 112.6 && x < 157.5) windDir = 's-y';
// else if(x >= 157.6 && x < 202.5) windDir = 's';
// else if(x >= 202.6 && x < 247.5) windDir = 's-w';
// else if(x >= 247.6 && x < 292.5) windDir = 'w';
// else if(x >= 292.6 && x < 337.5) windDir = 'n-w';
// else windDir = 'n';
// }

// console.log(windDir)

function formInfo(objCity) {
  let windDir;
  let x = Math.round(objCity.wind.deg);
  if (x > 22.5 && x < 67.5) windDir = 'n-y';
  else if (x >= 67.6 && x < 112.5) windDir = 'y';
  else if (x >= 112.6 && x < 157.5) windDir = 's-y';
  else if (x >= 157.6 && x < 202.5) windDir = 's';
  else if (x >= 202.6 && x < 247.5) windDir = 's-w';
  else if (x >= 247.6 && x < 292.5) windDir = 'w';
  else if (x >= 292.6 && x < 337.5) windDir = 'n-w';
  else windDir = 'n';

  console.log(windDir)



  showInfo(objCity.name, `name${objCity.sys.id}`);
  showInfo(`${Math.round(objCity.main.temp - 273.15)} &ordm;C`, `temp${objCity.sys.id}`);
  showInfo(objCity.weather[0].description, `descr${objCity.sys.id}`);
  showInfo(`${Math.round(objCity.wind.speed)} m/s, ${windDir}`, `wind${objCity.sys.id}`);
  showInfo(objCity.weather[0].icon, `icon${objCity.sys.id}`);



}


function showInfo(value, idOutput) {
  document.getElementById(idOutput).innerHTML = value;
  document.getElementById(idOutput).src = 'http://openweathermap.org/img/wn/' + value + '@2x.png'
}