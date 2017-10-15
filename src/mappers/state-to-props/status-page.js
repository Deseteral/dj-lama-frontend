function mapStateToProps(state) {
  if (!state.status) {
    return {};
  }

  const playing = state.status.currentlyPlaying;

  return {
    songTitle: playing ? playing.title : null,
    songArtist: playing ? playing.artist : null,
    songCount: state.status.songCount,
    queueLength: state.status.queueLength,
    onAirSince: state.status.onAirSince,
  };
}

export default mapStateToProps;
