//================== Прогноз погоды =======================

window.addEventListener('load', init, false);

let windDir;
let hour;
let min;

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
      formInfo(data);
    })
}

function formInfo(dataCity) {
  let cityName = dataCity.name;
  let temp = Math.round(dataCity.main.temp - 273.15);
  let descrWeather = dataCity.weather[0].description;
  let windSpeed = Math.round(dataCity.wind.speed);
  let iconWeather = dataCity.weather[0].icon;

  getWindDir(dataCity);
  getTime(dataCity);

  showInfo(cityName, `name${dataCity.id}`);
  showInfo(hour + ':' + min, `time${dataCity.id}`);
  showInfo(temp + ' &ordm;C', `temp${dataCity.id}`);
  showInfo(descrWeather, `descr${dataCity.id}`);
  showInfo(windSpeed + ' m/s, ' + windDir, `wind${dataCity.id}`);
  showInfo(iconWeather, `icon${dataCity.id}`);
}

function getTime(dataCity) {
  let date = new Date();
  let deltaTimeZone = dataCity.timezone;

  hour = date.getUTCHours() + deltaTimeZone / (60 * 60);
  min = date.getMinutes();

  hour = getZero(hour);
  min = getZero(min);
}

function getZero(num) {
  if (num < 10) return '0' + num;
  else return num;
}

function getWindDir(dataCity) {
  let x = Math.round(dataCity.wind.deg);

  if (x >= 22.5 && x < 67.5) windDir = 'N - E';
  else if (x >= 67.5 && x < 112.5) windDir = 'East';
  else if (x >= 112.5 && x < 157.5) windDir = 'S - E';
  else if (x >= 157.5 && x < 202.5) windDir = 'South';
  else if (x >= 202.5 && x < 247.5) windDir = 'S - W';
  else if (x >= 247.5 && x < 292.5) windDir = 'West';
  else if (x >= 292.5 && x < 337.5) windDir = 'N - W';
  else windDir = 'Nord';
}

function showInfo(value, idOutput) {
  document.getElementById(idOutput).innerHTML = value;
  document.getElementById(idOutput).src = 'http://openweathermap.org/img/wn/' + value + '@2x.png'
}