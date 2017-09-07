import React, { Component } from 'react';
import TimePicker from '../../components/TimePicker/TimePicker';
import './TheaterPicker.css';

export default class TheaterPicker extends Component {
  render() {
    return (
      <div className="TheaterPicker">
        <div className="title">{ this.props.theater.name }</div>

        <div className="times">
          <TimePicker times={ this.props.theater.times } />
        </div>
      </div>
    )
  }
}
