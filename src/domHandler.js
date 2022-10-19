export function displayData(data, info) {
  createCurrent(data, info);
}

function createCurrent(data, info) {
  const location = document.getElementById("location");
  const temp = document.getElementById("temp");
  const date = document.getElementById("date");
  const image = document.getElementById("image-forecast");
  const weather = document.getElementById("weather");
  let degrees = Math.round(data[0].temp);
  location.innerText = `${info.city}, ${info.country}`;
  date.innerText = data[0].date.toDateString();
  temp.innerText = `${degrees}°C`;
  weather.innerText = data[0].weather.description;
  image.src = `http://openweathermap.org/img/wn/${data[0].weather.icon}.png`;
}
export function createForecast(data) {
  clear("forecast");
  for (let i = 1; i < 7; i++) {
    const forecast = document.getElementById("forecast");
    let day = document.createElement("div");
    let image = document.createElement("img");
    image.src = `http://openweathermap.org/img/wn/${data[i].weather.icon}.png`;
    let date = document.createTextNode(data[i].date.toDateString());
    let max = document.createTextNode(data[i].tempMax + "|");
    let min = document.createTextNode(data[i].tempMin);
    day.append(
      date,
      document.createElement("br"),
      image,
      document.createElement("br"),
      max,
      min
    );
    day.classList.add("day");
    forecast.appendChild(day);
  }
}

function clear(elementName) {
  const content = document.getElementById(elementName);
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
