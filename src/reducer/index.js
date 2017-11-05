import { combineReducers } from 'redux';
import status from './status';
import library from './library';
import queue from './queue';

const reducers = combineReducers({
  status,
  library,
  queue,
});

export default reducers;
