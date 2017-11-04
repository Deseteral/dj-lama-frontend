const LIBRARY_FETCH_REQUESTED = 'LIBRARY_FETCH_REQUESTED';
const LIBRARY_FETCH_SUCCEEDED = 'LIBRARY_FETCH_SUCCEEDED';
const LIBRARY_FETCH_FAILED = 'LIBRARY_FETCH_FAILED';

function libraryFetch() {
  return {
    type: LIBRARY_FETCH_REQUESTED,
  };
}

function libraryFetchSucceeded(payload) {
  return {
    type: LIBRARY_FETCH_SUCCEEDED,
    payload,
  };
}

function libraryFetchFailed(message) {
  return {
    type: LIBRARY_FETCH_FAILED,
    message,
  };
}

export {
  libraryFetch,
  libraryFetchSucceeded,
  libraryFetchFailed,
  LIBRARY_FETCH_REQUESTED,
  LIBRARY_FETCH_SUCCEEDED,
  LIBRARY_FETCH_FAILED,
};
