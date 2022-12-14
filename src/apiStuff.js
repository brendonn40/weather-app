import { forecastFactory, currentFactory } from './dataFactory'
import { toPascalCase } from './useful.js'
//get forecast

export async function grabWeatherData(coords) {
  try {
    let coordinate = `lat=${coords[0]}&lon=${coords[1]}`
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?${coordinate}&exclude=hourly,minutely&units=metric&appid=7370ebfde9fc5aeac5372c17d6e4c27c`,
      { mode: 'cors' }
    )
    const data = await response.json()
    let array = []
    array.push(currentFactory(data))
    for (let i = 0; i < data.daily.length; i++) {
      array.push(forecastFactory(data.daily[i]))
    }
    return array
  } catch (err) {
    console.log(err)
  }
}

//gets lat and lon and info(city/country) & returns in that order in an array
export async function getCoordinates(city) {
  try {
    let name = city.replace(' ', '+')
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=7370ebfde9fc5aeac5372c17d6e4c27c`,
      { mode: 'cors' }
    )
    const coordinates = await response.json()
    let info = {}
    let array = []
    info.city = toPascalCase(city)
    info.country = coordinates[0].country
    array.push(coordinates[0].lat, coordinates[0].lon, info)
    return array
  } catch (err) {
    alert('This city doesnt exist. Check your spelling.')
    console.log(err)
  }
}
