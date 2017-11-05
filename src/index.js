/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import App from './components/App/App';
import reducer from './reducer';
import { statusFetch } from './actions/status';
import { libraryFetch } from './actions/library';
import { queueFetch } from './actions/queue';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <App
    store={store}
    refreshStatus={() => store.dispatch(statusFetch())}
    refreshLibrary={() => store.dispatch(libraryFetch())}
    refreshQueue={() => store.dispatch(queueFetch())}
  />,
  document.getElementById('root'),
);
