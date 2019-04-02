/* Sends to app witch view user wants */

export default function (state = null, action) {

  switch (action.type) {
    case 'VIEW_CHANGED':
      return action.payload;
  }

  return state;
}