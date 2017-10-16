import {
  statusFetch,
  statusFetchSucceeded,
  statusFetchFailed,
  STATUS_FETCH_REQUESTED,
  STATUS_FETCH_SUCCEEDED,
  STATUS_FETCH_FAILED,
} from '../status';

describe('Status action creators', () => {
  it('should create fetch action', () => {
    // when
    const action = statusFetch();

    // then
    expect(action).toEqual({
      type: STATUS_FETCH_REQUESTED,
    });
  });

  it('should create fetch succeeded action', () => {
    // given
    const payload = { data: 'foo' };

    // when
    const action = statusFetchSucceeded(payload);

    // then
    expect(action).toEqual({
      type: STATUS_FETCH_SUCCEEDED,
      payload,
    });
  });

  it('should create fetch failed action', () => {
    // given
    const message = 'whoops something went wrong';

    // when
    const action = statusFetchFailed(message);

    // then
    expect(action).toEqual({
      type: STATUS_FETCH_FAILED,
      message,
    });
  });
});
