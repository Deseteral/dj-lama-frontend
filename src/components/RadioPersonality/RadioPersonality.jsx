import React, { Component } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './RadioPersonality.css';

class RadioPersonality extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage() {
    window.djLamaSocket.sendMessage(this.state.message);
    this.setState({ message: '' });
  }

  changeMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <Card title="Send message">
        <textarea
          className={styles['input']}
          onChange={e => this.changeMessage(e)}
          onKeyPress={e => this.onKeyPress(e)}
          autoComplete="off"
          rows="5"
          value={this.state.message}
        />
        <Button
          className={styles['button']}
          onClick={() => this.sendMessage()}
          secondary
        >
          Send message
        </Button>
      </Card>
    );
  }
}

export default RadioPersonality;
