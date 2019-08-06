import React from 'react';
import Secs from './Secs';
import CageContainer from './CageContainer';


class MainContainer extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     secs: {
  //       1: {
  //         id: 1,
  //         name: 'David',
  //         votes: 0,
  //         // image: me
  //       },        
  //       2: {
  //         id: 2,
  //         name: 'Aspen',
  //         votes: -9000,
  //         // image: aspen
  //       }
  //     }
  //   }
  // }

  // increaseVote = (secId) => {
  //   this.setState({
  //     secs: {
  //       ...this.state.secs,
  //       [secId]: {
  //         ...this.state.secs[secId],
  //         votes: this.state.secs[secId]['votes'] + 1
  //       }
  //     }
  //   })
  // }

  // decreaseVote = (secId) => {
  //   this.setState({
  //     secs: {
  //       ...this.state.secs,
  //       [secId]: {
  //         ...this.state.secs[secId],
  //         votes: this.state.secs[secId]['votes'] - 1
  //       }
  //     }
  //   })
  // }
  
  render() {
    return (
      <div>
        <Secs />
        <h1> THANKS FOR VOTING </h1>
        <CageContainer />
      </div>
    )
  }
}

export default MainContainer;
