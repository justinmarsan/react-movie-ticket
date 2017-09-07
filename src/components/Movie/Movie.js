import React, { Component } from 'react';
import DayPicker from '../../components/DayPicker/DayPicker';

export default class Movie extends Component {
  render() {
    return (
      <div className="Movie">
        <div className="details">Details of the movie</div>

        <div className="day-picker">
          <DayPicker />
        </div>
      </div>
    )
  }
}
