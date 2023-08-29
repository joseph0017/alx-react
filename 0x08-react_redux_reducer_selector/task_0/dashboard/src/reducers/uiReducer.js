import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

const intialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

export default function uiReducer (state = intialState, action)  {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return {...state, isNotificationDrawerVisible: true}
        case HIDE_NOTIFICATION_DRAWER:
            return {...state, isNotificationDrawerVisible: false}
        case LOGIN_SUCCESS:
            return {...state, isUserLoggedIn: true}
        case LOGIN_FAILURE:
            return {...state, isUserLoggedIn: false}
        case LOGOUT:
            return {...state, isUserLogged: false}
        default:
            return state;
    }
}
