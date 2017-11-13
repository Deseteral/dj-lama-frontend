function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const song = state.library.find(s => s.id === id);

  return {
    id,
    title: song.title,
    artist: song.artist,
    youtubeId: song.youtubeId,
  };
}

export default mapStateToProps;
