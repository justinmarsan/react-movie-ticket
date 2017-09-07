import React, { Component } from 'react';
import DayPicker from '../../components/DayPicker/DayPicker';
import './Movie.css';

export default class Movie extends Component {
  render() {
    return (
      <div className="Movie">
        <div className="details">
          <div className="picture"></div>

          <div className="metadata">
            <div className="title">{ this.props.movie.title }</div>
            <div className="category">{ this.props.movie.category }</div>
            <div className="rating">IMDB : <b>{ this.props.movie.IMDB }</b></div>
          </div>
        </div>

        <div className="day-picker">
          {this.props.movie.isActive && <DayPicker />}
        </div>
      </div>
    )
  }
}
