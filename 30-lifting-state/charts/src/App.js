import React from 'react';
import './App.css';

import SongForm from './components/SongForm'
import Chart from './components/Chart'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      songs: [
        {title: 'Old Town Road', genre: 'Country'},
        {title: 'Truck Song', genre: 'Country'},
        {title: 'Dog Song', genre: 'Country'},
        {title: 'Fishing Song / Dead Wife Song', genre: 'Country'},
        {title: 'Trucker Hats', genre: 'Country'},
      ]
    }

    this.addSong = this.addSong.bind(this)
    this.deleteSong = this.deleteSong.bind(this)
  }

  addSong(song) {
    let songs = [...this.state.songs, song]
    this.setState({songs})
  }

  deleteSong(song) {
    let songs = this.state.songs.filter(ss => {
      return ss !== song
    })
    this.setState({songs})
  }

  render() {
    return <div className="App App-header">
      <SongForm addSong={this.addSong} />
      <Chart songs={this.state.songs} deleteSong={this.deleteSong} />
    </div>
  }
}

export default App;
