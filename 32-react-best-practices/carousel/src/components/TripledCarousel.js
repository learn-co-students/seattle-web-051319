import React from 'react'
import MoviePoster from './MoviePoster'

export default class TripledCarousel extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      index: 0,
      movies: [...this.props.movies, ...this.props.movies]
    }

    this.showNext = this.showNext.bind(this)
    this.showPrevious = this.showPrevious.bind(this)
  }

  static getDerivedStateFromProps(props) {
    console.log('get derived state', props)
    return {movies: [...props.movies, ...props.movies]}
  }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log('should?', newProps, newState)
  //   if (this.state.movies.length !== newProps.movies.length) {
  //     this.setState({movies: newProps.movies})
  //     return true
  //   }
  //   return false
  // }

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

      <MoviePoster movie={this.state.movies[this.state.index]} />
      <MoviePoster movie={this.state.movies[this.state.index + 1]} />
      <MoviePoster movie={this.state.movies[this.state.index + 2]} />
    </div>
  }
}