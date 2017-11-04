import React from 'react';
import PropTypes from 'prop-types';
import styles from './SongItem.css';

function SongItem({ title, artist, onClick }) {
  return (
    <div className={styles['root']} onClick={onClick} role="button" tabIndex="0">
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
  onClick: PropTypes.func.isRequired,
};

export default SongItem;
