import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './StatusPage.css';

function StatusPage({ songTitle, songArtist }) {
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
    </div>
  );
}

StatusPage.propTypes = {
  songTitle: PropTypes.string,
  songArtist: PropTypes.string,
};

StatusPage.defaultProps = {
  songTitle: null,
  songArtist: null,
};

export default StatusPage;
