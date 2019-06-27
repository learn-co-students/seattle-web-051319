// create a global variable to keep track of the movies
// so we can filter through all the movies later
let MOVIES = []
const API_MOVIE_URL = 'http://localhost:3000/movies'

function loadMovies() {
  // forgot why this is here (not really --Mera)
  "a group of words".split().length

  console.log('1. fetching movies')
  fetch(API_MOVIE_URL)
  .then(response => { return response.json() })
  .then(json => {
    console.log('2. got movies')
    displayMovies(json)
  })
  .catch(err => {
    displayError(err)
  })
  console.log('3. end of function')
}

// accepts an array of movies
function displayMovies(movies) {
  MOVIES = movies
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i]
    addMovie(movie)
  }
}

function createMovieLi(movie) {
  console.log('movie:', movie)
  let title = movie.title
  let year = movie.year

  let li = document.createElement('li')
  li.textContent = title + '(' + year + ')'

  let button = document.createElement('button')
  button.textContent = 'remove'
  button.addEventListener('click', () => {
    deleteMovie(movie.id)
    .then(() => {
      li.remove()
    })
    .catch(err => {
      displayError(err)
    })
  })

  li.appendChild(button)
  return li
}

function prependMovie(movie) {
  let movieLi = createMovieLi(movie)
  let moviesList = document.getElementById('movies')
  moviesList.prepend(movieLi)
}

function addMovie(movie) {
  let movieLi = createMovieLi(movie)
  let moviesList = document.getElementById('movies')
  moviesList.appendChild(movieLi)
}


function handleSubmit(ev) {
  ev.preventDefault() 

  clearMovieList()

  // access the query and filter the list down to
  // just movies where the tile or the year matches
  // our query
  let query = document.getElementById('filter').value
  query = query.toLowerCase()

  MOVIES.forEach(movie => {
    // I'm explicitly casting movie.year to a String to make sure
    // it has the string-like .includes method (which numbers do not have)
    if (movie.title.toLowerCase().includes(query) ||
        ('' + movie.year).toLowerCase().includes(query)) {
      addMovie(movie)
    }
  })
}

function clearMovieList() {
  let moviesList = document.getElementById('movies')

  // continue this while loop as long as there's
  // anything in the moviesList element
  while (moviesList.firstChild) {
    // remove each one until they are all gone
    moviesList.firstChild.remove()
  }
}

function handleSave(ev) {
  ev.preventDefault()

  let title = ev.target.elements['title'].value
  let year = ev.target.elements['year'].value

  // send a POST network request to save this to db
  saveMovie(title, year)
  .then(movie => {
    // make the movie appear at the top of the list
    prependMovie(movie)
  })
  .catch(err => {
    displayError(err)
  })
}

function saveMovie(title, year) {
  // demonstrating why "Content-Type" must be surrounded
  // by strings. 
  // oo = {'Content-Type': 'a/j', Content: 99}
  // let Type = 80
  // oo['Content-Type']
  // oo.Content-Type

  // make a POST request instead of GET because we're sending info
  // configure the headers to tell the server it's JSON
  // stuff our info in an object
  // manually convert that object to JSON
  // attach the JSON-ified object in the body of the request
  return fetch(API_MOVIE_URL, {
    method: 'POST',
    // common mistake: "header" vs "headers"
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      year: year
    })
  })
  .then(res => res.json())
}

function deleteMovie(id) {
  return fetch(API_MOVIE_URL + '/' + id, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .catch(err => {
    displayError(err)
  })
}

function handleChange(ev) {
  console.log('decade:', ev.target.value)
}

function displayError(err) {
  console.log('err:', err)
  let errorBar = document.getElementById('error')
  let message = document.getElementById('message')
  message.textContent = err.message

  // remove the .hidden class to reveal the error
  errorBar.classList.remove('hidden')

  let secondsLeft = 5
  let countdown = document.getElementById('countdown')
  countdown.textContent = secondsLeft + "s"

  // execute this code every so-many milliseconds
  let intervalId = setInterval(() => {
    secondsLeft--
    countdown.textContent = secondsLeft + "s"
    console.log('secondsLeft:', secondsLeft)
  }, 1000)

  // execute this code so many milliseconds in the future
  setTimeout(() => {
    errorBar.classList.add('hidden')
    clearInterval(intervalId)
  }, secondsLeft * 1000)
}

function main() {
  loadMovies()

  let form = document.getElementById('movie-filter')
  form.addEventListener('submit', handleSubmit)

  let saveForm = document.getElementById('save-form')
  saveForm.addEventListener('submit', handleSave)

  let select = document.getElementById('select-decade')
  select.addEventListener('change', handleChange)
}

main()