import { toPascalCase } from "./pascal.js";
import { changeTimeZone } from "./timezone.js";
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
  date.innerText = changeTimeZone(
    data[0].date,
    data[0].timezone
  ).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    hour12: false,
  });
  temp.innerText = `${degrees}°C`;
  weather.innerText = toPascalCase(data[0].weather.description);
  image.src = `http://openweathermap.org/img/wn/${data[0].weather.icon}.png`;
}
export function createForecast(data) {
  clear("forecast");
  for (let i = 1; i < 7; i++) {
    const forecast = document.getElementById("forecast");
    let day = document.createElement("div");
    let image = document.createElement("img");
    image.src = `http://openweathermap.org/img/wn/${data[i].weather.icon}.png`;
    const options = { weekday: "long" };
    let dayOfWeek = data[i].date;
    let date = document.createTextNode(
      new Intl.DateTimeFormat("en-US", options).format(dayOfWeek)
    );
    let max = document.createTextNode(Math.round(data[i].tempMax) + "°|");
    let min = document.createTextNode(Math.round(data[i].tempMin) + "°");
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
