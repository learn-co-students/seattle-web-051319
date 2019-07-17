import React, { Component } from 'react';

class SongForm extends Component {
  handleSubmit(ev) {
    ev.preventDefault()
    let {title, genre} = ev.target.elements
    console.log('eh?', title, genre)

    title = title.value
    genre = genre.value
    this.props.addSong({title, genre})
  }

  render() { 
    return <form onSubmit={(ev) => this.handleSubmit(ev)}>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="genre" placeholder="genre" />
      <input type="submit" />
    </form>
  }
}
 
export default SongForm;