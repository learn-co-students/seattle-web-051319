'use strict';

const url = 'http://localhost:3000/movies';
const newMovieForm = document.getElementById('new-movie');
const container = document.getElementById('container');

newMovieForm.addEventListener('submit', () => {
  event.preventDefault();
  addMovie();
})

function fetchMovies() {
  fetch(url)
  .then(res => res.json())
  .then(json => displayMovies(json))
}

function displayMovies(movies) {
  for (let movie of movies) {
    displaySingleMovie(movie);
  }
}

function displaySingleMovie(movie) {
  const card = document.createElement('div');
  const titleEl = document.createElement('h4');
  const image = document.createElement('img');
  const likes = document.createElement('p');
  const likeButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  titleEl.textContent = movie.title;
  image.src = movie.image;
  likes.textContent = `Likes: ${movie.likes}`;
  likeButton.textContent = 'Like';
  deleteButton.textContent = 'Remove'

  likeButton.addEventListener('click', () => {
    movie.likes += 1;
    likeMovie(movie, likes);
    // likes.textContent = `Likes: ${movie.likes}`;
  })

  deleteButton.addEventListener('click', () => {
    deleteMovie(movie);
    container.removeChild(card);
  })

  card.appendChild(titleEl);
  card.appendChild(image);
  card.appendChild(likes);
  card.appendChild(likeButton);
  card.appendChild(deleteButton);
  container.appendChild(card);
}

function addMovie() {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify({
      title: newMovieForm.title.value,
      image: newMovieForm.image.value,
      likes: 0
    })
  })
  .then(res => res.json())
  .then(json => displaySingleMovie(json))
}

function likeMovie(movieObj, likeDisplay) {
  fetch(`${url}/${movieObj.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify({
      likes: movieObj.likes
    })
  })
  .then(res => res.json())
  .then(json => likeDisplay.textContent = `Likes: ${json.likes}`)
}

function deleteMovie(movieObj) {
  fetch(`${url}/${movieObj.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    }
  })
  .then(res => res.json())
}

fetchMovies();