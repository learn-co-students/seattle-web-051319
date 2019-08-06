import React from 'react';
import { connect } from 'react-redux'
import { increaseVote, decreaseVote } from '../actions/secActions'

const SecCard = props => {

  const { sec } = props;

  return (
    <div className='card'>
      <h2>Name: { sec.name }</h2>
      <p>Votes: { sec.votes }</p>
      <img src={ sec.image } alt={ sec.name }></img>
      <br />
      <button onClick={() => {
        props.increaseVote(sec.id)
      }}>
        Upvote
      </button>
      <button onClick={() => {
        props.decreaseVote(sec.id)
      }}>
        Downvote
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    increaseVote: (id) => dispatch(increaseVote(id)),
    decreaseVote: (id) => dispatch(decreaseVote(id))
  }
}

export default connect(null, mapDispatchToProps)(SecCard);
