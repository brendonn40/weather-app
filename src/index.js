import "./style.css";
import { grabWeatherData } from "./apiStuff";
import search from "./search.svg";
const searchImg = document.getElementById("search");
searchImg.src = search;
searchImg.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  const city = document.getElementById("city").value;
  let data = grabWeatherData(city);
  data.then((res) => console.log(res));

  document.getElementById("city").value = "";
});
