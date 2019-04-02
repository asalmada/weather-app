import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userViewChanged } from './../actions/index';
import { bindActionCreators } from 'redux';

import Navbar from './navbar';
import CityView from './../components/city_view';
import HistoryView from './../containers/history_view';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='text-center' id='main-div-view'>
          {(!this.props.userView) && <p>Please choose one of the options above!</p>}

          {(this.props.userView==='single-city') && <CityView city={this.props.weatherList[0]}/>}
          {(this.props.userView==='single-city') && <button
            type='button'
            className='btn btn-dark'
            onClick={() => {this.props.userViewChanged('history-view'); }}
          >
            See all requests
          </button>}

          {(this.props.userView==='history-view') && <HistoryView />}
          {(this.props.userView==='history-view') && <button
            type='button'
            className='btn btn-dark'
            onClick={() => {this.props.userViewChanged('single-city'); }}
          >
            Get back
          </button>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    weatherList: state.weatherList,
    userView: state.userView
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userViewChanged
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
