'use strict';

const form = document.getElementById('new-movie');
const container = document.getElementById('container');
const url = 'http://localhost:3000/movies'

const fetchMovies = () => {
  fetch(url)
  .then(res => res.json())
  .then(json => displayAllMovies(json))
}

const displayAllMovies = (allMovies) => {
  for (let movie of allMovies) {
    displayMovie(movie);
  }
}

const displayMovie = (movie) => {
  const divEl = document.createElement('div');
  const titleEl = document.createElement('h4');
  const image = document.createElement('img');
  const likes = document.createElement('p');
  const likeButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  titleEl.textContent = movie.title;
  image.src = movie.image;
  likes.textContent = `Likes: ${movie.likes}`;
  likeButton.textContent = "Like Movie";
  deleteButton.textContent = "Remove Movie";

  divEl.appendChild(titleEl);
  divEl.appendChild(image);
  divEl.appendChild(likes);
  divEl.appendChild(likeButton);
  divEl.appendChild(deleteButton);

  container.appendChild(divEl);
}

const addNewMovie = () => {
  console.log(form)
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      'title': form.title.value,
      'image': form.image.value,
      'likes': 0
    })
  })
  .then(res => res.json())
  .then(json => console.log(json))
}

form.addEventListener('submit', () => {
  event.preventDefault();
  console.log('fired!')
  addNewMovie();
})

fetchMovies();