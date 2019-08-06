import React from 'react';
import CageCard from './CageCard';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/cageActions';


class CageContainer extends React.Component {

  renderMovies = () => {
    return this.props.movies.map((movie) => {
      return <CageCard key={movie.id} movie={movie} />
    })
  }

  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    return (
      <React.Fragment>
        {this.renderMovies()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CageContainer);