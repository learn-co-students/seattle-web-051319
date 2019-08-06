export const updateMovies = (movies) => {
  return {
    type: 'UPDATE_MOVIES',
    payload: movies
  }
}

export const fetchMovies = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(json => dispatch(updateMovies(json)))
  }
}