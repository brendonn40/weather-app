export function changeTimeZone(date, timeZone) {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone,
      })
    )
  }

  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    })
  )
}

export function toPascalCase(str) {
  if (/^[a-z\d]+$/i.test(str)) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return str
    .replace(
      /([a-z\d])([a-z\d]*)/gi,
      (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    )
    .replace(/[^a-z\d]/gi, ' ')
}

export function temperatureConverter(valNum) {
  valNum = parseFloat(valNum)
  return valNum * 1.8 + 32
}
