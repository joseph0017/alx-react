import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER, LOGIN } from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const intialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

export default function uiReducer (state = intialState , action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return intialState.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return intialState.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return intialState.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
      return intialState.set('isUserLoggedIn', false);
    case LOGIN:
      return intialState.set('user', action.user);
    case LOGOUT:
      return intialState.set('user', null);
    default:
      return state;
  }
};
