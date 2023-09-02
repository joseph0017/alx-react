import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => state.notifications;

export const getUnreadNotifications = (state) => {
  const notifications = getNotifications(state);
  const unReadNotification = notifications.filter((notification) => !notification.isRead);
  return Map(unReadNotification);
};
