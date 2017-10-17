import {
  STATUS_FETCH_SUCCEEDED,
} from '../actions/status';

function status(state = null, action) {
  switch (action.type) {
    case STATUS_FETCH_SUCCEEDED:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

export default status;
