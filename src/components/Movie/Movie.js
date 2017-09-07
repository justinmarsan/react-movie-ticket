import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DayPicker from '../../components/DayPicker/DayPicker';
import './Movie.css';

export default class Movie extends Component {
  componentDidUpdate() {
    if(this.props.movie.isActive) {
      this.animateDayPickerSize();
    }
  }

  componentWillUpdate() {
    if(!this.props.movie.isActive) {
      this.animateDayPickerSize();
    }
  }

  render() {
    return (
      <div className="Movie">
        <div className="details" onClick={this.props.toggleActive}>
          <div className="picture"></div>

          <div className="metadata">
            <div className="title">{ this.props.movie.title }</div>
            <div className="category">{ this.props.movie.category }</div>
            <div className="rating">IMDB : <b>{ this.props.movie.IMDB }</b></div>
          </div>
        </div>

        <div className="day-picker" ref={(el) => {this.dayPicker = el}}>
          <ReactCSSTransitionGroup transitionName="NoCssTransition" transitionLeave={true} transitionLeaveTimeout={400} transitionEnter={false}>
            {this.props.movie.isActive &&
              <DayPicker />
            }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }

  animateDayPickerSize() {
    var height,
        d = this.dayPicker.querySelector('.DayPicker'),
        targetheight,
        currentHeight;

    if(d) {
      d.removeAttribute('style');
    }

    height = this.dayPicker.getBoundingClientRect().height

    if(this.props.movie.isActive) { // Appear Animation
      currentHeight = 0;
      targetheight = height;
    }
    else { // Disappear Animation
      currentHeight = height;
      targetheight = 0;
    }

    if(d) {
      d.style.height = currentHeight+'px';
      d.style.transition = 'height 0.4s ease-out';
    }

    requestAnimationFrame( () => {
      if(d) {
        d.style.height = targetheight+'px';
      }
    });
  }
}
