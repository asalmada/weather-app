/* Sends to container info about all the cities chosen weather */

export default function (state = null, action) {

  let cityRequests = [];

  switch (action.type) {
    case 'CITY_LOADED':
      cityRequests.push(action.payload);
      return cityRequests;
  }

  return state;
}