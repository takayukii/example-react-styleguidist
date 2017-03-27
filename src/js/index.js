import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from './utils/configureStore';

import App from './components/App';

const initialState = {
  app: {
    myName: 'Nancy',
  }
};
const store = configureStore({initialState});

ReactDOM.render(
  <Provider store={store}>
    <App greeting="Hello React!"/>
  </Provider>,
  document.getElementById('spa-root')
);
