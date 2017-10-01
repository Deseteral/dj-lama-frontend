/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App/App';
import reducer from './reducer';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'),
);
// registerServiceWorker();
