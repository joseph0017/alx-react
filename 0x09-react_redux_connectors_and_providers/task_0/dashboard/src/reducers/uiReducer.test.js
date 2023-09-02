import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import uiReducer, { intialState } from './uiReducer';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('UI reducers tests', function () {
  it('verifying the state returned by the uiReducer function equals the initial state when no action is passed', () => {

    expect(uiReducer(intialState.toJS(), 'null')).toEqual(intialState.toJS());
  });

  it('verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(intialState.toJS(), {type: SELECT_COURSE})).toEqual(intialState.toJS());
  });

  it('verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    expect(uiReducer(intialState.toJS(), {type: DISPLAY_NOTIFICATION_DRAWER})).toEqual(intialState.set('isNotificationDrawerVisible', true));
  });
});
