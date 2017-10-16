import { call, put, takeEvery } from 'redux-saga/effects';
import {
  STATUS_FETCH_REQUESTED,
  statusFetchSucceeded,
  statusFetchFailed,
} from '../actions/status';
import DJLamaService from '../services/dj-lama-service';

function* fetchStatus() {
  try {
    const status = yield call(DJLamaService.status.get);
    yield put(statusFetchSucceeded(status));
  } catch (e) {
    yield put(statusFetchFailed(e.message));
  }
}

function* saga() {
  yield takeEvery(STATUS_FETCH_REQUESTED, fetchStatus);
}

export default saga;
