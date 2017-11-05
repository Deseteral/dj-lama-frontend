import { connect } from 'react-redux';
import mapStateToProps from '../mappers/state-to-props/library-page';
import LibraryPage from '../components/LibraryPage/LibraryPage';

function mapDispatchToProps() {
  return {};
}

const LibraryPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LibraryPage);

export default LibraryPageContainer;
