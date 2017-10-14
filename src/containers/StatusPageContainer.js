import { connect } from 'react-redux';
import StatusPage from '../components/StatusPage/StatusPage';

function mapStateToProps(state) {
  if (!state.status) {
    return {};
  }

  const playing = state.status.currentlyPlaying;

  return {
    songTitle: playing ? playing.title : null,
    songArtist: playing ? playing.artist : null,
  };
}

function mapDispatchToProps() {
  return {};
}

const StatusPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusPage);

export default StatusPageContainer;
