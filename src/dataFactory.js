export function forecastFactory(daily) {
  return {
    date: new Date(daily.dt * 1000),
    tempMax: daily.temp.max,
    tempMin: daily.temp.min,
    weather: daily.weather[0],
  };
}

export function currentFactory(data) {
  return {
    date: new Date(data.current.dt * 1000),
    temp: data.current.temp,
    humidity: data.current.humidity,
    weather: data.current.weather[0],
  };
}
