import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DJLamaService from '../../services/dj-lama-service';
import Card from '../Card/Card';
import SongItem from '../SongItem/SongItem';

const REFRESH_INTERVAL_SECONDS = 20;

class LibraryPage extends Component {
  componentDidMount() {
    this.refreshInterval = setInterval(
      () => this.props.refreshLibrary(),
      1000 * REFRESH_INTERVAL_SECONDS,
    );

    this.props.refreshLibrary();
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Card title="Library">
        <section>
          {this.props.songs.map(s => (
            <SongItem
              key={s.id}
              title={s.title}
              artist={s.artist}
              playCount={s.playCount}
              onClick={() => DJLamaService.queue.post(s.id)}
            />
          ))}
        </section>
      </Card>
    );
  }
}

LibraryPage.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    }),
  ),
  refreshLibrary: PropTypes.func.isRequired,
};

LibraryPage.defaultProps = {
  songs: [],
};

export default LibraryPage;
