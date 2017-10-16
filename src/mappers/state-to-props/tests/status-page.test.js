import mapStateToProps from '../status-page';

describe('Status page - map state to props', () => {
  it('should correctly map state to props', () => {
    // given
    const state = {
      status: {
        currentlyPlaying: {
          title: 'test title',
          artist: 'test artist',
        },
        songCount: 21,
        queueLength: 44,
        onAirSince: 'some date',
      },
    };

    // when
    const props = mapStateToProps(state);

    // then
    expect(props).toEqual({
      songTitle: 'test title',
      songArtist: 'test artist',
      songCount: 21,
      queueLength: 44,
      onAirSince: 'some date',
    });
  });

  it('should map state when it is null', () => {
    // given
    const state = {
      status: null,
    };

    // when
    const props = mapStateToProps(state);

    // then
    expect(props).toEqual({});
  });

  it('should map state when there is no song playing', () => {
    // given
    const state = {
      status: {
        currentlyPlaying: null,
      },
    };

    // when
    const props = mapStateToProps(state);

    // then
    expect(props.songTitle).toBe(null);
    expect(props.songArtist).toBe(null);
  });
});
