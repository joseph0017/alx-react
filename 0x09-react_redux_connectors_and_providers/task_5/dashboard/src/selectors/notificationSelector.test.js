import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const initialState = Map({
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
      isRead: false,
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

});

describe('tests the notification selector', () => {
  it('should retrieve the correct notification filter', () => {
    expect(filterTypeSelected(initialState)).toEqual('DEFAULT');
  });

  it('returns the list of notifications ', () => {
    const notifications = notificationsNormalizer(initialState);
    expect(getNotifications(notifications)).toEqual(notifications.notifications);
  });

  //   it('should return the list of unread notifications', () => {

  //     const newState = Map({
  //       filter: 'DEFAULT',
  //       notifications: [
  //         {
  //           id: 1,
  //           isRead: true,
  //           type: 'default',
  //           value: 'New course available'
  //         },
  //         {
  //           id: 2,
  //           isRead: false,
  //           type: 'urgent',
  //           value: 'New resume available'
  //         },
  //         {
  //           id: 3,
  //           isRead: false,
  //           type: 'urgent',
  //           value: 'New data available'
  //         }
  //       ]

  //     })

//     const notReadNotifications = [
//       {
//         id: 2,
//         isRead: false,
//         type: 'urgent',
//         value: 'New resume available'
//       },
//       {
//         id: 3,
//         isRead: false,
//         type: 'urgent',
//         value: 'New data available'
//       }
//     ]
//     expect(getUnreadNotifications(newState)).toEqual(notReadNotifications)
//   })
});
