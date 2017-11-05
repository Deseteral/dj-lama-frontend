import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import SongItem from '../SongItem/SongItem';

const REFRESH_INTERVAL_SECONDS = 5;

class QueuePage extends Component {
  componentDidMount() {
    this.refreshInterval = setInterval(
      () => this.props.refreshQueue(),
      1000 * REFRESH_INTERVAL_SECONDS,
    );

    this.props.refreshQueue();
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  render() {
    const { currentlyPlaying, queue } = this.props;

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
  refreshQueue: PropTypes.func.isRequired,
};

QueuePage.defaultProps = {
  currentlyPlaying: null,
  queue: [],
};

export default QueuePage;
