import { displayNotificationDrawer, hideNotificationDrawer, login, logout } from './uiActionCreators';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from './uiActionTypes';

describe('test for uiActionCreators', () => {
  it('should test the login function creator', () => {
    const email = 'naruto@gmail.com';
    const password = 'rasengan';

    const loginUser = {
      type: LOGIN,
      user: { email: 'naruto@gmail.com', password: 'rasengan'}
    };

    expect(login(email, password)).toEqual(loginUser);
  });

  it('should test logout function creator', () => {
    const logoutUser = {
      type: LOGOUT
    };
    expect(logout()).toEqual(logoutUser);
  });

  it('should test hideNotificationDrawer function creator', () => {
    const hideNotificationDraw = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(hideNotificationDraw);
  });

  it('should test displayNotificationDrawer function creator', () => {
    const displayNotificationDraw = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(displayNotificationDraw);
  });
});
