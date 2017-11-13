import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DJLamaService from '../../services/dj-lama-service';
import Card from '../Card/Card';
import styles from './EditSongPage.css';

class EditSongPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      title: props.title,
      artist: props.artist,
      youtubeId: props.youtubeId,
    };
  }

  submit(event) {
    event.preventDefault();

    const { id, title, artist, youtubeId } = this.state;
    const song = {
      id,
      title,
      artist,
      youtubeId,
    };

    if (!id) {
      DJLamaService.library.post(song);
    } else {
      DJLamaService.library.put(song.id, song);
    }

    window.location.replace('/library');
  }

  handleChange(event, fragmentName) {
    this.setState({ [fragmentName]: event.target.value });
  }

  renderInput(fragmentName, label) {
    const fragmentNameUppercase = fragmentName.charAt(0).toUpperCase() + fragmentName.slice(1);
    const elementId = `input${fragmentNameUppercase}`;
    return (
      <div>
        <label className={styles['input-label']} htmlFor={elementId}>
          {label}
        </label>
        <input
          id={elementId}
          className={styles['text-box']}
          type="text"
          value={this.state[fragmentName]}
          placeholder={label}
          onChange={e => this.handleChange(e, fragmentName)}
        />
      </div>
    );
  }

  render() {
    const cardTitle = !this.state.id
      ? 'Add new song'
      : 'Edit song';

    return (
      <Card title={cardTitle}>
        <form>
          {this.renderInput('title', 'Title')}
          {this.renderInput('artist', 'Artist')}
          {this.renderInput('youtubeId', 'YouTube video ID')}

          <button className={styles['button']} onClick={e => this.submit(e)}>
            Submit
          </button>
        </form>
      </Card>
    );
  }
}

EditSongPage.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  youtubeId: PropTypes.string,
};

EditSongPage.defaultProps = {
  id: null,
  title: '',
  artist: '',
  youtubeId: '',
};

export default EditSongPage;
