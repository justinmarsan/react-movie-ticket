import React, { Component } from 'react';
import TheaterPicker from '../../components/TheaterPicker/TheaterPicker';
import './DayPicker.css';

export default class DayPicker extends Component {
  render() {
    return (
      <div className="DayPicker">
        <div className="days">
          <div className="day">
            M
            <b>1</b>
          </div>

          <div className="day">
            T
            <b>2</b>
          </div>

          <div className="day">
            W
            <b>3</b>
          </div>

          <div className="day">
            T
            <b>4</b>
          </div>

          <div className="day">
            F
            <b>5</b>
          </div>

          <div className="day">
            S
            <b>6</b>
          </div>

          <div className="day">
            S
            <b>7</b>
          </div>
        </div>

        <div className="theaters">
          <div className="theater"><TheaterPicker /></div>
          <div className="theater"><TheaterPicker /></div>
          <div className="theater"><TheaterPicker /></div>
        </div>
      </div>
    )
  }
}
