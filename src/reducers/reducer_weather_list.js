export default function (state = [], action) {

  switch (action.type) {
    case 'CITY_LOADED':
      return [ action.payload, ...state ];
  }

  return state;
}