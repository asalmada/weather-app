import axios from 'axios';

export const CITY_LOADED = 'CITY_LOADED';
export const VIEW_CHANGED = 'VIEW_CHANGED';

export function fetchWeatherInfo(city) {

  const API_URL = `https://fcc-weather-api.glitch.me/api/current?lon=${city.longitude}&lat=${city.latitude}`;
  const request = axios.get(API_URL); /* Uses axios to get information about the weather in a city */

  return ({
    type: CITY_LOADED,
    payload: request
  });
}

export function userViewChanged(view) {
  return({
    type: VIEW_CHANGED,
    payload: view
  });
}