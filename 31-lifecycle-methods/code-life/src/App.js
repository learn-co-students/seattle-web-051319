import React from 'react';
import './App.css';

import Hope from './components/Hope'
import Reddit from './components/Reddit'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isShowingHope: false,
      random: Math.random()
    }
  }

  toggleHope() {
    this.setState({isShowingHope: !this.state.isShowingHope})
  }

  generateRandomNumber() {
    this.setState({random: Math.random()})
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App App-header">
        <button onClick={() => this.toggleHope()}>toggle hope</button>
        <button onClick={() => this.generateRandomNumber()}>generate random number {this.state.random}</button>
        {this.state.isShowingHope && <Hope random={this.state.random} />}

        <Reddit />
      </div>
    );
  }
}

export default App;
