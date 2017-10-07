/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import { statusFetch } from './actions/status';
import App from './components/App/App';
import reducer from './reducer';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

store.dispatch(statusFetch());

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'),
);
