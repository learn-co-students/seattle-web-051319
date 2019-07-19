import React from 'react'
import Movie from '../lib/Movie';

export default class MovieEntryForm extends React.Component {
  constructor() {
    super()
  }
  
  handleSubmit(ev) {
    ev.preventDefault()

    let title = ev.target.elements.title.value
    let posterUrl = ev.target.elements.posterUrl.value

    let movie = new Movie(title, posterUrl)
    this.props.addMovie(movie)
  }

  render() {
    return <div>
      <form onSubmit={(ev) => this.handleSubmit(ev)}>
        <input type="text" name="title" />
        <input type="text" name="posterUrl" />
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  }
}