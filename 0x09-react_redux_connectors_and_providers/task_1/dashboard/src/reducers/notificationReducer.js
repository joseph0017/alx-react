import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = {
  notifications: new Map([]),
  filter: 'DEFAULT'
};

export default function notificationsReducer (state = new Map(initialState) , action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData).map((key) => {
        normalizedData[key].isRead = false;
      });
      return state.merge(normalizedData);

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return set('filter', state.filter);

    default:
      return state;
  }
};
