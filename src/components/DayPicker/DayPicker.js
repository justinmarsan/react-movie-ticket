import React, { Component } from 'react';
import TheaterPicker from '../../components/TheaterPicker/TheaterPicker';
import './DayPicker.css';
import days from '../../mocks/days.json';
import theaters from '../../mocks/theaters.json';

export default class DayPicker extends Component {
  constructor(props) {
    super(props);

    var days_data = days;

    days_data.forEach(function(day) {
      day.theaters = [theaters[Math.floor(Math.random() * theaters.length)], theaters[Math.floor(Math.random() * theaters.length)], theaters[Math.floor(Math.random() * theaters.length)]];
    });

    this.state = {
      days: days_data,
      activeDay: 0
    }
  }

  render() {
    return (
      <div className="DayPicker">
        <div className="days">
          {this.state.days.map((day, index) =>
            <div className={ this.getDayClasses(index) } key={ index } onClick={ this.setActiveDay.bind(this, index) }>
              { day.letter }
              <b>{ day.number }</b>
            </div>
          )}
        </div>

        <div className="theaters">
          {this.state.days[this.state.activeDay].theaters.map((theater, index) =>
            <div className="theater" key={ index }>
              <TheaterPicker theater={ theater } />
            </div>
          )}
        </div>
      </div>
    )
  }

  setActiveDay(index) {
    return this.setState({activeDay: index});
  }

  getDayClasses(index) {
    if(index === this.state.activeDay) {
      return 'day day--active';
    }
    else {
      return 'day';
    }
  }
}
