import "./style.css";
import { grabWeatherData, getCoordinates } from "./apiStuff.js";
import search from "./images/search.svg";
import { displayData } from "./domHandler.js";
const searchImg = document.getElementById("search");
searchImg.src = search;
searchImg.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  middle();
  // grabWeatherData(city);
  // let data = grabWeatherData(city);
  // data.then((res) => displayData(res));
  document.getElementById("city").value = "";
});

async function middle() {
  const city = document.getElementById("city").value;
  const coord = await getCoordinates(city);
  const forecast = await grabWeatherData(coord);
  console.log(forecast[0].weather.description);
  displayData(forecast, coord[2]);
}
