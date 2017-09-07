import React, { Component } from 'react';
import TimePicker from '../../components/TimePicker/TimePicker';

export default class TheaterPicker extends Component {
  render() {
    return (
      <div className="TheaterPicker">
        <div className="title">Theater Name</div>

        <div className="times">
          <TimePicker />
        </div>
      </div>
    )
  }
}
