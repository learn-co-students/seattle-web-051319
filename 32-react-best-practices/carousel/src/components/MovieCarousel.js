import React from 'react'
import MoviePoster from './MoviePoster'

export default class MovieCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }

    this.showNext = this.showNext.bind(this)
    this.showPrevious = this.showPrevious.bind(this)
  }

  showNext() {
    let index = this.state.index + 1
    if (index >= this.props.movies.length) {
      index = 0
    }
    this.setState({index})
  }
  
  showPrevious() {
    let index = this.state.index - 1
    if (index < 0) {
      index = this.props.movies.length - 1
    }
    this.setState({index})
  }

  render() {
    return <div>
      Carousel {this.props.movies.length}
      <h1>Now Showing</h1>
      <div>
        <span onClick={this.showPrevious} className="previous clickable">previous</span>{' '}
        <span onClick={this.showNext} className="next clickable">next</span>
      </div>
      <MoviePoster movie={this.props.movies[this.state.index]} />
    </div>
  }
}