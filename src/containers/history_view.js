import React, { Component } from 'react';
import { connect } from 'react-redux';

class HistoryView extends Component {

  renderTemperatures() {
    return (
      this.props.cities.map((city, index) => {

        /* Gets max and min temps in all weather history for each city */
        let city_weathers = this.props.weatherList.filter(e => { return e.name === city.name_in_api});
        let max_value, min_value = undefined;
        
        city_weathers.map(data => {
          
          if ((data.main.temp < min_value) || (min_value === undefined)) {
            min_value = data.main.temp;
          }

          if ((data.main.temp > max_value) || (max_value === undefined)) {
            max_value = data.main.temp;
          }
        });

        return(
          <div className='row' key={index}>
            <div className='col-3 text-left'>
              <p>City: {city.name}</p>
            </div>
            <div className='col-9 text-right'>
              {max_value && <p>Min: {min_value}º/C/Max: {max_value}ºC</p>}
              {!max_value && <p>Still not searched...</p>}
            </div>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        {this.renderTemperatures()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    cities: state.cities,
    weatherList: state.weatherList
  });
}

export default connect(mapStateToProps)(HistoryView);