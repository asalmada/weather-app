import React, { Component } from 'react';

class CityView extends Component {
  render () {
    return (
      <div className='text-center'>
        <p>You're viewing weather information for: {this.props.city.name}</p>
        <img src={this.props.city.weather[0].icon} alt='Weather icon' /> ({this.props.city.weather[0].main})
        <p>Temperature: <b>{this.props.city.main.temp} ºC</b></p>
        <p>Min: <b>{this.props.city.main.temp_min} ºC</b></p>
        <p>Max: <b>{this.props.city.main.temp_max} ºC</b></p>
      </div>
    );
  }
}

export default CityView;