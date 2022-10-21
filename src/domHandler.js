import { toPascalCase } from './useful.js'
import { changeTimeZone, temperatureConverter } from './useful.js'
export function displayData(data, info, scale) {
  createCurrent(data, info, scale)
  createForecast(data, scale)
  switcher(data, info)
}

function createCurrent(data, info, scale) {
  const location = document.getElementById('location')
  const temp = document.getElementById('temp')
  const date = document.getElementById('date')
  const image = document.getElementById('image-forecast')
  const weather = document.getElementById('weather')
  let degrees
  if (scale === 'C') {
    degrees = Math.round(data[0].temp)
  } else {
    degrees = Math.round(temperatureConverter(data[0].temp))
  }

  location.innerText = `${info.city}, ${info.country}`
  date.innerText = changeTimeZone(
    data[0].date,
    data[0].timezone
  ).toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    hour12: false,
  })
  temp.innerText = `${degrees}°${scale}`
  temp.append(createSwitcher(scale))
  weather.innerText = toPascalCase(data[0].weather.description)
  image.src = `http://openweathermap.org/img/wn/${data[0].weather.icon}.png`
}
export function createForecast(data, scale) {
  clear('forecast')
  for (let i = 1; i < 7; i++) {
    const forecast = document.getElementById('forecast')
    let day = document.createElement('div')
    let image = document.createElement('img')
    image.src = `http://openweathermap.org/img/wn/${data[i].weather.icon}.png`
    const options = { weekday: 'long' }
    let dayOfWeek = data[i].date
    let date = document.createTextNode(
      new Intl.DateTimeFormat('en-US', options).format(dayOfWeek)
    )
    let max, min
    if (scale === 'C') {
      max = document.createTextNode(Math.round(data[i].tempMax) + '°|')
      min = document.createTextNode(Math.round(data[i].tempMin) + '°')
    } else {
      max = document.createTextNode(
        Math.round(temperatureConverter(data[i].tempMax)) + '°|'
      )
      min = document.createTextNode(
        Math.round(temperatureConverter(data[i].tempMin)) + '°'
      )
    }

    day.append(
      date,
      document.createElement('br'),
      image,
      document.createElement('br'),
      max,
      min
    )
    day.classList.add('day')
    forecast.appendChild(day)
  }
}

function clear(elementName) {
  const content = document.getElementById(elementName)
  while (content.firstChild) {
    content.removeChild(content.firstChild)
  }
}
function createSwitcher(scale) {
  const label = document.createElement('label')
  const input = document.createElement('input')
  const span = document.createElement('span')
  input.type = 'checkbox'
  if (scale === 'F') {
    input.checked = true
  } else {
    input.checked = false
  }
  label.classList.add('switch')
  span.classList.add('slider')
  span.classList.add('round')
  label.append(input, span)
  return label
}
function switcher(data, info) {
  const input = document.querySelector('.switch input')
  input.addEventListener('change', (e) => {
    if (e.target.checked) {
      displayData(data, info, 'F')
    } else {
      displayData(data, info, 'C')
    }
  })
}
