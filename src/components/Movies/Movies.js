import React, { Component } from 'react';
import Movie from '../../components/Movie/Movie';
import './Movies.css';
import movies from '../../mocks/movies.json';

export default class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movies
    };

    console.log(this.state);
  }

  render() {
    return (
      <div className="Movies">
        <div className="title">My Movie Theater App</div>

        <div className="filters">
          <div className="filter active">All</div>
          <div className="filter">Comedy</div>
          <div className="filter">Action</div>
        </div>

        <div className="movies">
          {this.state.movies.map((movie, index) =>
            <div className="movie" key={index}>
              <Movie movie={movie} index={index} toggleActive={ this.toggleActiveMovie.bind(this, index) } />
            </div>
          )}
        </div>
      </div>
    )
  }

  toggleActiveMovie(index) {
    var movies = this.state.movies;

    movies.map((movie, i) => {
      if(i === index) {
        return movie.isActive = !!!movie.isActive;
      }
      else{
        return movie.isActive = false;
      }
    })

    return this.setState({movies: movies});
  }
}
