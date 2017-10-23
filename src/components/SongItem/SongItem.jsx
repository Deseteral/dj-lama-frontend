import React from 'react';
import PropTypes from 'prop-types';
import styles from './SongItem.css';

function SongItem({ title, artist }) {
  return (
    <div className={styles['root']}>
      <div className={styles['info']}>
        <div>{title}</div>
        <div className={styles['artist']}>{artist}</div>
      </div>
    </div>
  );
}

SongItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default SongItem;
