function mapStateToProps(state) {
  return {
    songs: Array.isArray(state.queue) ? state.queue : [],
  };
}

export default mapStateToProps;
