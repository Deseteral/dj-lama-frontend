import React from 'react';
import PropTypes from 'prop-types';
import styles from './SongItem.css';

function SongItem({ title, artist, playCount, onClick }) {
  return (
    <div className={styles['root']} onClick={onClick} role="button" tabIndex="0">
      <div className={styles['info']}>
        <div>{title}</div>
        <div className={styles['small']}>{artist}</div>
      </div>
      <div className={styles['small']}>
        played: {playCount}
      </div>
    </div>
  );
}

SongItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  playCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SongItem;
