import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import SongItem from '../SongItem/SongItem';

function QueuePage({ currentlyPlaying, queue }) {
  return (
    <Card title="Queue">
      <section>
        {currentlyPlaying &&
          <SongItem
            title={currentlyPlaying.title}
            artist={currentlyPlaying.artist}
            playCount={currentlyPlaying.playCount}
          />
        }
        {queue.map((s, index) => (
          <SongItem
            key={`${s.id}-${index}`} // eslint-disable-line react/no-array-index-key
            index={(index + 1)}
            title={s.title}
            artist={s.artist}
            playCount={s.playCount}
          />
        ))}
      </section>
    </Card>
  );
}

QueuePage.propTypes = {
  currentlyPlaying: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    playCount: PropTypes.number.isRequired,
  }),
  queue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      playCount: PropTypes.number.isRequired,
    }),
  ),
};

QueuePage.defaultProps = {
  currentlyPlaying: null,
  queue: [],
};

export default QueuePage;
