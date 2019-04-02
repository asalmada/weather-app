import { CITY_LOADED } from './../actions/index';

/*  Receives the requested weather data after resolving the promise with React Promise middleware */
export default function (state = [], action) {

  switch (action.type) {
    case CITY_LOADED:
      return [ action.payload.data, ...state ];
  }

  return state;
}