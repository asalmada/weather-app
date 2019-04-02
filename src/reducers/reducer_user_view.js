/* Sends to app witch view user wants */

import { CITY_LOADED, VIEW_CHANGED } from './../actions/index'; 

export default function (state = null, action) {

  switch (action.type) {
    case VIEW_CHANGED: /* User wants to see all requests max and min temperatures */
      return action.payload;

    case CITY_LOADED: /* Promised solved, must show the single city weather view */
      return 'single-city';

  }

  return state;
}