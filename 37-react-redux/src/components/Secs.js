import React from 'react';
import SecCard from './SecCard';
import { connect } from 'react-redux';

console.log(connect);
const Secs = props => {

  const mapSecs = () => {
    let secArray = Object.values(props.secs);
    let secCards = secArray.map(sec => {
      return (
        <SecCard 
          key={ sec.id }
          sec={ sec }
        />
      )
    })
    return secCards;
  }

  return (
    <div>
      <div className='container'>
        {mapSecs()}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    secs: state.secs.secs
  }
}
 
export default connect(mapStateToProps)(Secs);
