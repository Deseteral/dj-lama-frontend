import mapStateToProps from '../edit-song';

describe('Edit song - map state to props', () => {
  it('should correctly map state to props', () => {
    // given
    const state = {
      library: [
        { id: 'fake-id', title: 'fake title', artist: 'fake artist', youtubeId: 'fake youtubeid' },
        { id: 'test-id', title: 'test title', artist: 'test artist', youtubeId: 'youtubeid' },
        { id: 'some-id', title: 'some title', artist: 'some artist', youtubeId: 'some youtubeid' },
      ],
    };
    const ownProps = {
      match: {
        params: {
          id: 'test-id',
        },
      },
    };

    // when
    const props = mapStateToProps(state, ownProps);

    // then
    expect(props).toEqual({
      id: 'test-id',
      title: 'test title',
      artist: 'test artist',
      youtubeId: 'youtubeid',
    });
  });
});
