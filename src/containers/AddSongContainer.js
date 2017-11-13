import { connect } from 'react-redux';
import mapStateToProps from '../mappers/state-to-props/edit-song';
import EditSongPage from '../components/EditSongPage/EditSongPage';

function mapDispatchToProps() {
  return {};
}

const AddSongContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditSongPage);

export default AddSongContainer;
