import { connect } from 'react-redux';
import mapStateToProps from '../mappers/state-to-props/status-page';
import StatusPage from '../components/StatusPage/StatusPage';

function mapDispatchToProps() {
  return {};
}

const StatusPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusPage);

export default StatusPageContainer;
