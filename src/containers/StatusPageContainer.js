import { connect } from 'react-redux';
import { statusFetch } from '../actions/status';
import mapStateToProps from '../mappers/state-to-props/status-page';
import StatusPage from '../components/StatusPage/StatusPage';

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
