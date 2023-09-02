import { markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import notificationsReducer from './notificationReducer';
import { fromJS, Map, toJS } from 'immutable';

const data = {
  filter: 'DEFAULT',
  notifications: [
    {
      id: 1,
      isRead: false,
      type: 'default',
      value: 'New course available'
    },
    {
      id: 2,
      isRead: true,
      type: 'urgent',
      value: 'New resume available'
    },
    {
      id: 3,
      isRead: false,
      type: 'urgent',
      value: 'New data available'
    }
  ]
};

describe('tests for notificationReducer module', () => {
  it('Test that MARK_AS_READ returns the data with the right item updated', () => {
    const expectedResult = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: true,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    };
    const notify = notificationsReducer(Map(data), markAsAread(2));
    expect(notify.toJS()).toEqual(expectedResult);
  });

  it('should create right action for notification filter', () => {
    expect(setNotificationFilter(NotificationTypeFilters['DEFAULT'])).toEqual({
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT'
    });
  });
});
