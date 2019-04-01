export function cityLoaded(city) {
  return({
    type: 'CITY_LOADED',
    payload: city
  });
}