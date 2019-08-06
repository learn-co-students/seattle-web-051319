import React from 'react';

const CageCard = props => {
  return (
    <div>
      <img className='cage' src={props.movie.image} alt={props.movie.name}/>
    </div>
  )
}

export default CageCard;