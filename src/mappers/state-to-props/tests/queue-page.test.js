import mapStateToProps from '../queue-page';

describe('Queue page - map state to props', () => {
  it('should correctly map state to props', () => {
    // given
    const state = {
      queue: ['song 1', 'song 2', 'song 3'],
    };

    // when
    const props = mapStateToProps(state);

    // then
    expect(props).toEqual({
      songs: ['song 1', 'song 2', 'song 3'],
    });
  });

  it('should map state when queue is not an array', () => {
    // given
    const state = {
      queue: null,
    };

    // when
    const props = mapStateToProps(state);

    // then
    expect(props).toEqual({
      songs: [],
    });
  });
});
