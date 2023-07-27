import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(
    <Notifications />,
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
);

