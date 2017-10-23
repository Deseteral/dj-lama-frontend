import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import SongItem from '../SongItem/SongItem';

function LibraryPage(props) {
  return (
    <Card>
      {props.songs.map(s => (
        <SongItem
          id={s.id}
          title={s.title}
          artist={s.artist}
        />
      ))}
    </Card>
  );
}

LibraryPage.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    }),
  ),
};

LibraryPage.defaultProps = {
  songs: [],
};

export default LibraryPage;
