import { connect } from 'react-redux';
import { libraryFetch } from '../actions/library';
import mapStateToProps from '../mappers/state-to-props/library-page';
import LibraryPage from '../components/LibraryPage/LibraryPage';

function mapDispatchToProps(dispatch) {
  return {
    refreshLibrary: () => dispatch(libraryFetch()),
  };
}

const LibraryPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LibraryPage);

export default LibraryPageContainer;
