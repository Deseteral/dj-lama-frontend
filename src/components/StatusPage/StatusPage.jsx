import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './StatusPage.css';

function StatusPage({ songTitle, songArtist, songCount }) {
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

StatusPage.propTypes = {
  songTitle: PropTypes.string,
  songArtist: PropTypes.string,
  songCount: PropTypes.number,
};

StatusPage.defaultProps = {
  songTitle: null,
  songArtist: null,
  songCount: null,
};

export default StatusPage;
