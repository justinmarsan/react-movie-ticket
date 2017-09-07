import React, { Component } from 'react';
import Movie from '../../components/Movie/Movie';
import './Movies.css';

export default class Movies extends Component {
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
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
          <div className="movie"><Movie /></div>
        </div>
      </div>
    )
  }
}
