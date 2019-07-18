import React, {Component} from 'react';

export default class Hope extends Component {
  constructor() {
    super()
    console.log('constructor', document.getElementById('hope'))
  }

  componentDidMount() {
    console.log('did mount', document.getElementById('hope'))
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update?', document.getElementById('hope'))
    // prevent it from updating if the random value is less than .2
    if (nextProps.random < this.props.random) {
      return false
    }
    return true
  }

  componentDidUpdate() {
    console.log('did update', document.getElementById('hope'))
  }

  componentWillUnmount() {
    console.log('will unmount', document.getElementById('hope'))
  }

  render() {
    console.log('render', document.getElementById('hope'))
    return <div id="hope">hope! {this.props.random}</div>
  }

}