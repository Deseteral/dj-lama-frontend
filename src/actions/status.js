const STATUS_FETCH_REQUESTED = 'STATUS_FETCH_REQUESTED';
const STATUS_FETCH_SUCCEEDED = 'STATUS_FETCH_SUCCEEDED';
const STATUS_FETCH_FAILED = 'STATUS_FETCH_FAILED';

function statusFetch() {
  return {
    type: STATUS_FETCH_REQUESTED,
  };
}

function statusFetchSucceeded(payload) {
  return {
    type: STATUS_FETCH_SUCCEEDED,
    payload,
  };
}

function statusFetchFailed(message) {
  return {
    type: STATUS_FETCH_FAILED,
    message,
  };
}

export {
  statusFetch,
  statusFetchSucceeded,
  statusFetchFailed,
  STATUS_FETCH_REQUESTED,
  STATUS_FETCH_SUCCEEDED,
  STATUS_FETCH_FAILED,
};
