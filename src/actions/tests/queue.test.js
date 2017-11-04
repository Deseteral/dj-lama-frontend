import {
  queueFetch,
  queueFetchSucceeded,
  queueFetchFailed,
  QUEUE_FETCH_REQUESTED,
  QUEUE_FETCH_SUCCEEDED,
  QUEUE_FETCH_FAILED,
} from '../queue';

describe('Queue action creators', () => {
  it('should create fetch action', () => {
    // when
    const action = queueFetch();

    // then
    expect(action).toEqual({
      type: QUEUE_FETCH_REQUESTED,
    });
  });

  it('should create fetch succeeded action', () => {
    // given
    const payload = { data: 'foo' };

    // when
    const action = queueFetchSucceeded(payload);

    // then
    expect(action).toEqual({
      type: QUEUE_FETCH_SUCCEEDED,
      payload,
    });
  });

  it('should create fetch failed action', () => {
    // given
    const message = 'whoops something went wrong';

    // when
    const action = queueFetchFailed(message);

    // then
    expect(action).toEqual({
      type: QUEUE_FETCH_FAILED,
      message,
    });
  });
});
