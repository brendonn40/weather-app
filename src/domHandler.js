export function displayData(data) {
  const location = document.getElementById("location");
  const temp = document.getElementById("temp");
  const date = document.getElementById("date");
  const image = document.getElementById("image-forecast");
  const weather = document.getElementById("weather");
  let degrees = Math.round(data.temp);
  location.innerText = `${data.name}, ${data.country}`;
  date.innerText = new Date();
  temp.innerText = `${degrees}°C`;
  weather.innerText = data.weather;
  switch (data.main) {
    case "Rain":
      //sets rain image
      break;
    case "Clouds":
      //
      break;
    case "Sun":
      //
      break;
  }
}
