export function displayData(data, info) {
  const location = document.getElementById("location");
  const temp = document.getElementById("temp");
  const date = document.getElementById("date");
  const image = document.getElementById("image-forecast");
  const weather = document.getElementById("weather");
  let degrees = Math.round(data[0].temp);
  location.innerText = `${info.city}, ${info.country}`;
  date.innerText = data[0].date;
  temp.innerText = `${degrees}°C`;
  weather.innerText = data[0].weather.description;
  image.src = `http://openweathermap.org/img/wn/${data[0].weather.icon}.png`;
}
