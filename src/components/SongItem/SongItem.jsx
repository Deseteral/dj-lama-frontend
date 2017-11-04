import React from 'react';
import PropTypes from 'prop-types';
import css from 'classnames';
import styles from './SongItem.css';

function SongItem({ index, title, artist, playCount, onClick }) {
  const rootClassNames = css(
    styles['root'],
    onClick ? styles['root--interactive'] : null,
  );

  return (
    <div className={rootClassNames} onClick={onClick} role="button" tabIndex="0">
      {index &&
        <div className={styles['index']}>{index}.</div>
      }
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
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  playCount: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

SongItem.defaultProps = {
  index: null,
  onClick: null,
};

export default SongItem;
