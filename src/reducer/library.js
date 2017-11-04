import {
  LIBRARY_FETCH_SUCCEEDED,
} from '../actions/library';

function library(state = [], action) {
  switch (action.type) {
    case LIBRARY_FETCH_SUCCEEDED:
      return action.payload.slice();
    default:
      return state;
  }
}

export default library;
