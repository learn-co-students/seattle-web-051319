import React from 'react';
import ChartItem from './ChartItem'

function Chart(props) {
  return <ul>
    {props.songs.map(song => {
      return <ChartItem
        key={song.title} song={song}
        deleteSong={props.deleteSong}
      />
    })}
  </ul>
}
 
export default Chart;