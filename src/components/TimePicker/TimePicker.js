import React, { Component } from 'react';
import './TimePicker.css';

export default class TimePicker extends Component {
  render() {
    return (
      <div className="TimePicker">
        {this.props.times.map((time, index) =>
          <div className="time" key={ index }>{ time }</div>
        )}
      </div>
    )
  }
}
