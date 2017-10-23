function mapStateToProps(state) {
  return {
    songs: state.library,
  };
}

export default mapStateToProps;
