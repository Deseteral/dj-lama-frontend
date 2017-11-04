import { combineReducers } from 'redux';
import status from './status';
import library from './library';

const reducers = combineReducers({
  status,
  library,
});

export default reducers;
