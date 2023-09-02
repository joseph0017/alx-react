import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from './notificationActionTypes';

describe('testing notification actions creators', () => {
  it('shoud test markAsARead function creators', () => {
    const readNotification = {
      type: MARK_AS_READ,
      index: 1
    };

    expect(markAsAread(1)).toEqual(readNotification);
  });

  it('shoud test setNotificationFilter function creators', () => {
    const filterNotification = {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT'
    };

    expect(setNotificationFilter(NotificationTypeFilters['DEFAULT'])).toEqual(filterNotification);
  });
});
