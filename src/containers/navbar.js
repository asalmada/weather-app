import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cityLoaded, userViewChanged } from './../actions/index';
import { bindActionCreators } from 'redux';
import axios from 'axios';

class Navbar extends Component {

  fetchWeatherInfo(city) {
    let url = `https://fcc-weather-api.glitch.me/api/current?lon=${city.longitude}&lat=${city.latitude}`;

    axios.get(url)
    .then(response => { 
      this.props.cityLoaded(response.data);
      this.props.userViewChanged('single-city');
    })
    .catch(err => { 
      console.log('Whoops! There was an error trying to fetch city info. Try again later'); 
      console.error(err);
    });
  }

  renderCityList() {
    return (
      this.props.cities.map((city, index) => {
        return (
          <li className='nav-item' key={index}>
            <a className='nav-link' onClick={() => { this.fetchWeatherInfo(city); }} >{city.name}</a>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <a className='navbar-brand' href='#'>Weather App</a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarToggler'
            aria-controls='navbarToggler'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarToggler'>
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
              {this.renderCityList()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    cities: state.cities, /* Gets the list of cities available */
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    cityLoaded: cityLoaded,
    userViewChanged: userViewChanged
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);