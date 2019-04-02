export function cityLoaded(city) {
  return({
    type: 'CITY_LOADED',
    payload: city
  });
}

export function userViewChanged(view) {
  return({
    type: 'VIEW_CHANGED',
    payload: view
  });
}