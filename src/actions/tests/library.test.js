import {
  libraryFetch,
  libraryFetchSucceeded,
  libraryFetchFailed,
  LIBRARY_FETCH_REQUESTED,
  LIBRARY_FETCH_SUCCEEDED,
  LIBRARY_FETCH_FAILED,
} from '../status';

describe('Library action creators', () => {
  it('should create fetch action', () => {
    // when
    const action = libraryFetch();

    // then
    expect(action).toEqual({
      type: LIBRARY_FETCH_REQUESTED,
    });
  });

  it('should create fetch succeeded action', () => {
    // given
    const payload = { data: 'foo' };

    // when
    const action = libraryFetchSucceeded(payload);

    // then
    expect(action).toEqual({
      type: LIBRARY_FETCH_SUCCEEDED,
      payload,
    });
  });

  it('should create fetch failed action', () => {
    // given
    const message = 'whoops something went wrong';

    // when
    const action = libraryFetchFailed(message);

    // then
    expect(action).toEqual({
      type: LIBRARY_FETCH_FAILED,
      message,
    });
  });
});
