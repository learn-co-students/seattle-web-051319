import React from 'react'

export default function(props) {
  return <div>
    <h2>{props.movie.title}</h2>
    <img src={props.movie.posterUrl} />
  </div>
}