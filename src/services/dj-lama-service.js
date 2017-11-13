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

function postLibrary(song) {
  return new Promise((resolve, reject) => {
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(song),
    };

    fetch(`${SERVICE_URL}/songs`, opts)
      .catch(e => reject(e));
  });
}

function putLibrary(songId, song) {
  return new Promise((resolve, reject) => {
    const opts = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(song),
    };

    fetch(`${SERVICE_URL}/songs/${songId}`, opts)
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
    post: postLibrary,
    put: putLibrary,
  },
  queue: {
    get: getQueue,
    post: postQueue,
  },
};

export default DJLamaService;
