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
            <div className="title">Wonder Woman</div>
            <div className="category">Action</div>
            <div className="rating">IMDB : <b>8.5</b></div>
          </div>
        </div>

        <div className="day-picker">
          <DayPicker />
        </div>
      </div>
    )
  }
}
