function getStatus() {
  return new Promise((resolve, reject) => {
    fetch(`${SERVICE_URL}/status`)
      .then(data => data.json())
      .then(status => resolve(status))
      .catch(e => reject(e));
  });
}

function getLibrary() {
  return new Promise((resolve, reject) => {
    fetch(`${SERVICE_URL}/songs`)
      .then(data => data.json())
      .then(library => resolve(library))
      .catch(e => reject(e));
  });
}

function getQueue() {
  return new Promise((resolve, reject) => {
    fetch(`${SERVICE_URL}/queue`)
      .then(data => data.json())
      .then(library => resolve(library))
      .catch(e => reject(e));
  });
}

function postQueue(songId) {
  return new Promise((resolve, reject) => {
    fetch(`${SERVICE_URL}/queue/${songId}`, { method: 'POST' })
      .catch(e => reject(e));
  });
}

const DJLamaService = {
  status: {
    get: getStatus,
  },
  library: {
    get: getLibrary,
  },
  queue: {
    get: getQueue,
    post: postQueue,
  },
};

export default DJLamaService;
