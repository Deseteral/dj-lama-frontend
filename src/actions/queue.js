const QUEUE_FETCH_REQUESTED = 'QUEUE_FETCH_REQUESTED';
const QUEUE_FETCH_SUCCEEDED = 'QUEUE_FETCH_SUCCEEDED';
const QUEUE_FETCH_FAILED = 'QUEUE_FETCH_FAILED';

function queueFetch() {
  return {
    type: QUEUE_FETCH_REQUESTED,
  };
}

function queueFetchSucceeded(payload) {
  return {
    type: QUEUE_FETCH_SUCCEEDED,
    payload,
  };
}

function queueFetchFailed(message) {
  return {
    type: QUEUE_FETCH_FAILED,
    message,
  };
}

export {
  queueFetch,
  queueFetchSucceeded,
  queueFetchFailed,
  QUEUE_FETCH_REQUESTED,
  QUEUE_FETCH_SUCCEEDED,
  QUEUE_FETCH_FAILED,
};
