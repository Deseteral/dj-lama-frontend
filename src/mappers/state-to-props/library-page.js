function mapStateToProps(state) {
  return {
    songs: Array.isArray(state.library) ? state.library : [],
  };
}

export default mapStateToProps;
