/* global SockJS, Stomp */

class DJLamaSocket {
  constructor() {
    this.stompClient = null;

    // Warm up speech synthesis voices cache
    window.speechSynthesis.getVoices();
  }

  connect() {
    const socket = new SockJS(`${SERVICE_URL}/dj-lama-service-socket`);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/messages', (response) => {
        const message = JSON.parse(response.body);
        this.onMessageRecived(message);
      });
    });
  }

  sendMessage(message) {
    this.stompClient.send(
      '/app/message',
      {},
      JSON.stringify({ text: message }),
    );
  }

  sendMessageEnd() {
    this.stompClient.send('/app/messageEnd', {}, '');
  }

  textToSpeech(text) {
    const voiceMessage = new SpeechSynthesisUtterance(text);
    voiceMessage.voice = window.speechSynthesis // eslint-disable-line prefer-destructuring
      .getVoices()
      .filter(v => v.lang === 'pl-PL')[1];

    voiceMessage.onend = () => this.sendMessageEnd();

    window.speechSynthesis.speak(voiceMessage);
  }

  onMessageRecived(message) {
    setTimeout(() => {
      this.textToSpeech(message.text);
    }, 2500);
  }
}

export default DJLamaSocket;
