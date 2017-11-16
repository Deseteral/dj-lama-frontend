import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatDuration from '../../utils/format-duration';
import Card from '../Card/Card';
import Button from '../Button/Button';
import DJLamaService from '../../services/dj-lama-service';
import styles from './StatusPage.css';

class StatusPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onAirTime: null,
    };
  }

  componentDidMount() {
    this.timerRefreshInterval = setInterval(
      () => this.calculateOnAirTime(),
      1000,
    );

    this.calculateOnAirTime();
  }

  componentWillUnmount() {
    clearInterval(this.timerRefreshInterval);
  }

  calculateOnAirTime() {
    if (!this.props.onAirSince) {
      this.setState({ onAirTime: null });
      return;
    }

    const startTime = new Date(this.props.onAirSince).getTime();
    const currentTime = this.props.getCurrentTime();
    const timeDiff = currentTime - startTime;
    const duration = formatDuration(timeDiff);

    this.setState({ onAirTime: duration });
  }

  render() {
    const { songTitle, songArtist, songCount, queueLength } = this.props;
    const { onAirTime } = this.state;

    return (
      <div>
        <Card
          className={styles['app-card']}
          transparent
        >
          <div className={styles['logo']} />
          <div className={styles['app-name']}>DJ Lama</div>
        </Card>
        {(songTitle && songArtist) &&
          <Card>
            <div>Currently playing...</div>
            <div className={styles['title']}>
              {songTitle}
            </div>
            <div className={styles['artist']}>
              {songArtist}
            </div>
            <Button
              className={styles['skip-button']}
              secondary
              onClick={() => DJLamaService.queue.skip()}
            >
              Skip song
            </Button>
          </Card>
        }
        {onAirTime &&
          <Card className={styles['on-air-container']}>
            <div className={styles['circle']} />
            <div className={styles['on-air']}>ON AIR</div>
            <div className={styles['timer']}>{onAirTime}</div>
          </Card>
        }
        {(Number.isInteger(songCount) || Number.isInteger(queueLength)) &&
          <Card>
            {Number.isInteger(songCount) &&
              <div>Number of songs in library: {songCount}</div>
            }
            {Number.isInteger(queueLength) &&
              <div>Number of songs in queue: {queueLength}</div>
            }
          </Card>
        }
      </div>
    );
  }
}

StatusPage.propTypes = {
  songTitle: PropTypes.string,
  songArtist: PropTypes.string,
  songCount: PropTypes.number,
  queueLength: PropTypes.number,
  onAirSince: PropTypes.string,
  getCurrentTime: PropTypes.func,
};

StatusPage.defaultProps = {
  songTitle: null,
  songArtist: null,
  songCount: null,
  queueLength: null,
  onAirSince: null,
  getCurrentTime: (() => new Date().getTime()),
};

export default StatusPage;
