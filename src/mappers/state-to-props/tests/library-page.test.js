import mapStateToProps from '../library-page';

describe('Library page - map state to props', () => {
  it('should correctly map state to props', () => {
    // given
    const state = {
      library: ['song 1', 'song 2', 'song 3'],
    };

    // when
    const props = mapStateToProps(state);

    // then
    expect(props).toEqual({
      songs: ['song 1', 'song 2', 'song 3'],
    });
  });
});
