import React from 'react';
import PropTypes from 'prop-types';

function SongItem({ id, title, artist }) {
  return (
    <div key={id}>
      {title} - {artist}
    </div>
  );
}

SongItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default SongItem;
