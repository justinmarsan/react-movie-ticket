import React, { Component } from 'react';
import Movie from '../../components/Movie/Movie';

export default class Movies extends Component {
  render() {
    return (
      <div className="Movies">
        <Movie />
        <Movie />
        <Movie />
      </div>
    )
  }
}
