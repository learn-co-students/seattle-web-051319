console.log('hello')

document.addEventListener('DOMContentLoaded', () => {
  main()
  randomBackgroundColor()
  interactWithWeekdays()
})

function main() {
  const time = document.getElementById('current-time')
  const now = new Date()

  const hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  seconds = zeroPrefix(seconds)
  minutes = zeroPrefix(minutes)

  time.textContent = `${hours}:${minutes}:${seconds}`
}

function zeroPrefix(value) {
  if (value < 10) {
    return '0' + value
  }
  return value
}

function randomBackgroundColor() {
  const colors = [null, 'blue', 'red', 'green']
  const index = Math.floor(Math.random() * colors.length)
  const color = colors[index]
  if (color !== null) {
    document.body.style.backgroundColor = color
  }
}

function interactWithWeekdays() {
  const days = document.getElementsByTagName('li')
  for (let i = 0; i < days.length; i++) {
    if (days[i].textContent === 'Friday') {
      days[i].textContent += '!!!'
    }
  }
}