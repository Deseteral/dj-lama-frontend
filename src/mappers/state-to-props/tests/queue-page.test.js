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
      currentlyPlaying: null,
      queue: ['song 1', 'song 2', 'song 3'],
    });
  });

  it('should add currently playing song', () => {
    // given
    const state = {
      status: {
        currentlyPlaying: 'song 0',
      },
      queue: ['song 1', 'song 2', 'song 3'],
    };

    // when
    const props = mapStateToProps(state);

    // then
    expect(props).toEqual({
      currentlyPlaying: 'song 0',
      queue: ['song 1', 'song 2', 'song 3'],
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
      currentlyPlaying: null,
      queue: [],
    });
  });

  it('should map state when queue is not an array and something is playing', () => {
    // given
    const state = {
      status: {
        currentlyPlaying: 'song 0',
      },
      queue: null,
    };

    // when
    const props = mapStateToProps(state);

    // then
    expect(props).toEqual({
      currentlyPlaying: 'song 0',
      queue: [],
    });
  });
});
