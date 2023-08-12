import React from 'react';

export const user = {
  email: '', password: '', isLoggedIn: false
};

export function logOut () {
  user.isLoggedIn;
};

export const AppContext = React.createContext({
  user,
logOut});
