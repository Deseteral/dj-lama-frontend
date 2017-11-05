import { connect } from 'react-redux';

import mapStateToProps from '../mappers/state-to-props/queue-page';
import QueuePage from '../components/QueuePage/QueuePage';

function mapDispatchToProps(dispatch) {
  return {
    refreshQueue: () => dispatch(queueFetch()),
  };
}

const QueuePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QueuePage);

export default QueuePageContainer;
