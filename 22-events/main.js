console.log('hello')

document.addEventListener('DOMContentLoaded', () => {
  main()
})

function main() {
  writeCurrentTime()
  randomBackgroundColor()
  interactWithWeekdays()
  attachClickListener()
  attachFormEvents()
  attachTodoEvents()
}

function writeCurrentTime() {
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
  const colors = [null, 'green']
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

function attachClickListener() {
  let clicks = 0
  const button = document.getElementById('clicker')
  const totalClicks = document.getElementById('total-clicks')

  // button.addEventListener('click', () => {
  //   clicks++
  //   totalClicks.textContent = clicks
  // })
  button.addEventListener('click', incrementClicks)

  // make clicks global so it persists unchanging between
  // function calls.
  function incrementClicks() {
    clicks++
    totalClicks.textContent = clicks
  }
}

function attachFormEvents() {
    console.log('attaching form event')
    // <form id="city-form">
    //   City: <input id="city-input" type="text" />
    const form = document.getElementById('city-form')
    const input = document.getElementById('city-input')
    const output = document.getElementById('your-city')
    
    // 9.times do |i|
    // end

    form.addEventListener('submit', (event) => {
      console.log('handle submit')
      // use the event object to prevent the form
      // from doing it's default "refresh the page"
      event.preventDefault()

      let city = input.value
      output.textContent = city
    })
}

function attachTodoEvents() {
  // get the ids for the text field, form, ul list
  // grab the text field
  // attach an event listener to the form on submit

  const form = document.getElementById('todo-form')
  const input = document.getElementById('todo-item')
  const list = document.getElementById('todo-list')

  form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    let text = ev.target.elements['city'].value
    
    let li = document.createElement('li')
    li.textContent = text

    // create an X delete button
    let span = document.createElement('span')
    span.textContent = ' [X]'
    span.addEventListener('click', () => {
      li.remove()
    })

    li.appendChild(span)

    list.appendChild(li)
  })
}