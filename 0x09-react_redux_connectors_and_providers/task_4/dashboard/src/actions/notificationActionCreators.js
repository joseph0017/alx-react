import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
  index};
};

export const boundMarkAsARead = (index) => {
  dispatch(markAsAread(index));
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
  filter};
};

export const boundSetNotificationFilter = (index) => {
  dispatch(setNotificationFilter(index));
};

export const fetchNotificationsSuccess = () => {
  return {
    data: {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    }

  };
};

export const boundFetchNotificationsSuccess = () => {
  dispatch(setNotificationFilter());
};
