import { combineReducers } from 'redux';
import Cities from './reducer_cities';
import WeatherList from './reducer_weather_list';
import UserView from './reducer_user_view';

const rootReducer = combineReducers({
  cities: Cities,
  weatherList: WeatherList,
  userView: UserView
});

export default rootReducer;
