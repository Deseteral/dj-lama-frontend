import {
  QUEUE_FETCH_SUCCEEDED,
} from '../actions/queue';

function queue(state = [], action) {
  switch (action.type) {
    case QUEUE_FETCH_SUCCEEDED:
      return action.payload.slice();
    default:
      return state;
  }
}

export default queue;
