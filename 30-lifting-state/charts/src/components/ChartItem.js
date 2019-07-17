import React, { Component } from 'react';

class ChartItem extends Component {
  render() { 
    // let song = this.props.song (OLD)
    let {song} = this.props // (NEW and very cool)
    return <li>
      <span onClick={() => this.props.deleteSong(song)}>X</span>
      {song.title}, {song.genre}
    </li>
  }
}
 
export default ChartItem;