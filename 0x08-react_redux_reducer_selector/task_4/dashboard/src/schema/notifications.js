import { schema, normalize } from 'normalizr';

import notificationInfo from '../../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {idAttribute: 'guid'});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedNotifications = normalize(notificationInfo, [notification]);

export default function getAllNotificationsByUser (userId) {
  const notification = normalizedNotifications.entities.notifications;
  const messages = normalizedNotifications.entities.messages;
  const result = [];

  for (const id in notification) {
    if (notification[id].author === userId) {
      result.push(messages[notification[id].context]);
    }
  }

  return result;
};

export const notificationsNormalizer = (data) => {
  const normalize = normalize(data, [notification]);
};
