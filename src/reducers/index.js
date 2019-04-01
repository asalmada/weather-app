import { combineReducers } from 'redux';
import Cities from './reducer_cities';
import RequestsList from './reducer_requests_list';

const rootReducer = combineReducers({
  cities: Cities,
  requestsList: RequestsList
});

export default rootReducer;
