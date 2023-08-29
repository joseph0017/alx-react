import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import uiReducer from './uiReducer';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('UI reducers tests', function () {
  it('verifying the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const intialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    expect(uiReducer(intialState, 'null')).toEqual(intialState);
  });

  it('verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const intialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    expect(uiReducer(intialState, {type: SELECT_COURSE})).toEqual(intialState);
  });

  it('verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const intialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    expect(uiReducer(intialState, {type: DISPLAY_NOTIFICATION_DRAWER})).toEqual({...intialState, isNotificationDrawerVisible: true});
  });
});
