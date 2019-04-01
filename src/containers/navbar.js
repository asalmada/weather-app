import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cityLoaded } from './../actions/index';
import { bindActionCreators } from 'redux';

import CityView from './../components/city_view';

class Navbar extends Component {

  fetchWeatherInfo(city) {
    let url = `https://fcc-weather-api.glitch.me/api/current?lon=${city.longitude}&lat=${city.latitude}`;

    fetch(url, {
      method: 'get'
    })
    .then(response => { 
      response.json().then(data => {
        this.props.cityLoaded(data);
      });
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

        {(!this.props.requestsList) && <center><p>Please choose one of the options above!</p></center>}
        {(this.props.requestsList) && <CityView city={this.props.requestsList[this.props.requestsList.length -1]}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    cities: state.cities, /* Gets the list of cities available */
    requestsList: state.requestsList /* Gets the list of cities searched */
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    cityLoaded: cityLoaded
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);