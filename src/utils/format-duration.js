function pad(number) {
  return number < 10
    ? `0${number}`
    : `${number}`;
}

function formatDuration(millis) {
  const secondsCount = millis / 1000;
  const hours = Math.floor(secondsCount / 3600);
  const minutes = Math.floor((secondsCount - (hours * 3600)) / 60);
  const seconds = Math.floor(secondsCount - (hours * 3600) - (minutes * 60));

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export default formatDuration;
