import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from 'classnames';
import DJLamaService from '../../services/dj-lama-service';
import Card from '../Card/Card';
import SongItem from '../SongItem/SongItem';
import styles from './LibraryPage.css';
import songItemStyles from '../SongItem/SongItem.css';

function LibraryPage(props) {
  const addNewSongButtonStyles = css(
    songItemStyles['root'],
    songItemStyles['root--interactive'],
    styles['add-new-song-button'],
  );

  return (
    <Card title="Library">
      <section>
        <NavLink
          className={addNewSongButtonStyles}
          to="/library/add"
        >
          + Add new song
        </NavLink>
        {props.songs.map(s => (
          <SongItem
            key={s.id}
            title={s.title}
            artist={s.artist}
            playCount={s.playCount}
            onClick={() => DJLamaService.queue.post(s.id)}
            editUrl={`/library/${s.id}`}
          />
        ))}
      </section>
    </Card>
  );
}

LibraryPage.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      playCount: PropTypes.number.isRequired,
    }),
  ),
};

LibraryPage.defaultProps = {
  songs: [],
};

export default LibraryPage;
