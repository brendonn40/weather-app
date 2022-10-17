import "./style.css";
import { grabWeatherData } from "./apiStuff.js";
import search from "./search.svg";
import { displayData } from "./domHandler.js";
const searchImg = document.getElementById("search");
searchImg.src = search;
searchImg.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  const city = document.getElementById("city").value;
  let data = grabWeatherData(city);
  data.then((res) => displayData(res));
  document.getElementById("city").value = "";
});
