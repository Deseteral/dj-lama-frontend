import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './StatusPage.css';

const REFRESH_INTERVAL_SECONDS = 5;

class StatusPage extends Component {
  componentDidMount() {
    setInterval(
      () => this.props.refreshStatus(),
      1000 * REFRESH_INTERVAL_SECONDS,
    );
  }

  render() {
    const { songTitle, songArtist, songCount } = this.props;

    return (
      <div>
        {(songTitle && songArtist) &&
          <Card>
            <div>Currently playing...</div>
            <div className={styles['title']}>
              {songTitle}
            </div>
            <div className={styles['artist']}>
              {songArtist}
            </div>
          </Card>
        }
        {Number.isInteger(songCount) &&
          <Card>
            <div>Number of songs in library: {songCount}</div>
          </Card>
        }
      </div>
    );
  }
}

StatusPage.propTypes = {
  songTitle: PropTypes.string,
  songArtist: PropTypes.string,
  songCount: PropTypes.number,
  refreshStatus: PropTypes.func.isRequired,
};

StatusPage.defaultProps = {
  songTitle: null,
  songArtist: null,
  songCount: null,
};

export default StatusPage;
