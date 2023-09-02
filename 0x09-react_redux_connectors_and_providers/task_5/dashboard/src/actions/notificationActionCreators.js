import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from './notificationActionTypes';

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

export const setLoadingState = (isLoading) => {
  return {
    type: SET_LOADING_STATE,
  isLoading};
};

export const setNotifications = (notificationsArray) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
  notificationsArray};
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(isLoading = true));
    const errMsg = 'sorry could not fetch notifications';
    const setLoading = fetch('../../notifications.json')
      .then(response => response.json)
      .then(data => dispatch(setNotifications(data)))
      .catch(err => {
        console.error(err);
        throw new Error(errMsg);
      })
      .finally(dispatch(setLoading(false)));
    return setLoading;
  };
};
