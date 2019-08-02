import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { initialState } from './state.js'

const reducer = (state = initialState, action) => {
  console.log('action: ', action)
  console.log('state: ', state)
  switch (action.type) {
    case 'INCREASE':
      return {...state, count: state.count + 1}
    case 'DECREASE':
      return {...state, count: state.count - 1}
    default:
      return state;
  }
}

const reducer2 = (state = initialState, action) => {
  console.log('action: ', action)
  console.log('state: ', state)
  switch (action.type) {
    case 'INCREASE':
      return {...state, count: state.count + 1}
    case 'DECREASE':
      return {...state, count: state.count - 1}
    default:
      return state;
  }
}

const store = createStore(reducer)

class App extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {

  renderDescription = () => {
    const remainder = store.getState().count % 5
    const upToNext = 5 - remainder
    return `The current count is less than ${store.getState().count + upToNext}`
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Intro to Redux</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    )
  }
}

class Counter extends Component {

  decrement = () => {
    store.dispatch({type: 'DECREASE'})
  }

  increment = () => {
    store.dispatch({type: 'INCREASE'})
  }

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    )
  }
}

export default App;
