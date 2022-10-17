export function dataFactory(rawData) {
  return {
    name: rawData.name,
    country: rawData.sys.country,
    feels_like: rawData.main.feels_like,
    humidity: rawData.main.humidity,
    temp: rawData.main.temp,
    weather: rawData.weather[0].description,
    main: rawData.weather[0].main,
  };
}
