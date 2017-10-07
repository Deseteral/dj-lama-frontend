import {
  STATUS_FETCH_SUCCEEDED,
} from '../actions/status';

const INITIAL_STATE = {
  status: null,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STATUS_FETCH_SUCCEEDED:
      return {
        status: Object.assign({}, action.payload),
      };
    default:
      return state;
  }
}

export default reducer;
