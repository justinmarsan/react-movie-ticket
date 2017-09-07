import React, { Component } from 'react';
import TheaterPicker from '../../components/TheaterPicker/TheaterPicker';

export default class DayPicker extends Component {
  render() {
    return (
      <div className="DayPicker">
        <div className="days">List of the days</div>

        <div className="theaters">
          <TheaterPicker />
        </div>
      </div>
    )
  }
}
