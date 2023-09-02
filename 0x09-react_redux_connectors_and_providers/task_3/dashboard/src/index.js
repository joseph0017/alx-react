import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import uiReducer, { intialState } from './reducers/uiReducer';

const store = createStore(uiReducer, intialState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,

  document.getElementById('root')
);
