function mapStateToProps(state) {
  const currentlyPlaying = state.status ?
    (state.status.currentlyPlaying || null)
    : null;

  return {
    currentlyPlaying,
    queue: Array.isArray(state.queue) ? state.queue : [],
  };
}

export default mapStateToProps;
