import { connect } from 'react-redux';
import { statusFetch } from '../actions/status';
import StatusPage from '../components/StatusPage/StatusPage';

function mapStateToProps(state) {
  if (!state.status) {
    return {};
  }

  const playing = state.status.currentlyPlaying;

  return {
    songTitle: playing ? playing.title : null,
    songArtist: playing ? playing.artist : null,
    songCount: state.status.songCount,
    onAirSince: state.status.onAirSince,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshStatus: () => dispatch(statusFetch()),
  };
}

const StatusPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusPage);

export default StatusPageContainer;
