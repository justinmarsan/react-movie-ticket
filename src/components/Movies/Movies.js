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
            <div className="movie" key={index} onClick={ this.toggleActiveMovie.bind(this, index) }>
              <Movie movie={movie} index={index} />
            </div>
          )}
        </div>
      </div>
    )
  }

  toggleActiveMovie(index) {
    var movies = this.state.movies;

    movies[index].isActive = !!!movies[index].isActive;

    this.setState({movies: movies});
  }
}
