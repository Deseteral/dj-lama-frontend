import { call, put, takeEvery } from 'redux-saga/effects';
import {
  STATUS_FETCH_REQUESTED,
  statusFetchSucceeded,
  statusFetchFailed,
} from '../actions/status';
import {
  LIBRARY_FETCH_REQUESTED,
  libraryFetchSucceeded,
  libraryFetchFailed,
} from '../actions/library';
import DJLamaService from '../services/dj-lama-service';

function* fetchStatus() {
  try {
    const status = yield call(DJLamaService.status.get);
    yield put(statusFetchSucceeded(status));
  } catch (e) {
    yield put(statusFetchFailed(e.message));
  }
}

function* fetchLibrary() {
  try {
    const library = yield call(DJLamaService.library.get);
    yield put(libraryFetchSucceeded(library));
  } catch (e) {
    yield put(libraryFetchFailed(e.message));
  }
}

function* saga() {
  yield takeEvery(STATUS_FETCH_REQUESTED, fetchStatus);
  yield takeEvery(LIBRARY_FETCH_REQUESTED, fetchLibrary);
}

export default saga;
