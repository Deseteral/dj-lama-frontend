import {
  LIBRARY_FETCH_SUCCEEDED,
} from '../actions/library';

function library(state = [], action) {
  switch (action.type) {
    case LIBRARY_FETCH_SUCCEEDED:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

export default library;
