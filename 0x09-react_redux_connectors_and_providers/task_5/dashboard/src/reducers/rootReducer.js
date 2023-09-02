import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import notificationsReducer from './notificationReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationsReducer,
  ui: uiReducer
});

export default rootReducer;
