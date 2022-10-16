export async function grabWeatherData(nameOfCity) {
  let name = nameOfCity.replace(" ", "+");
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=77f6fbd592fe60bc8e46195056c9a88f`,
    { mode: "cors" }
  );
  const data = await response.json();
  if (data.cod === 200) {
    console.log(data);
  } else {
    console.log("something went wrong, try typing the name of the city again.");
  }
}
