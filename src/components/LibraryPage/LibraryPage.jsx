import React from 'react';
import PropTypes from 'prop-types';
import DJLamaService from '../../services/dj-lama-service';
import Card from '../Card/Card';
import SongItem from '../SongItem/SongItem';

function LibraryPage(props) {
  return (
    <Card title="Library">
      <section>
        {props.songs.map(s => (
          <SongItem
            key={s.id}
            title={s.title}
            artist={s.artist}
            playCount={s.playCount}
            onClick={() => DJLamaService.queue.post(s.id)}
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
