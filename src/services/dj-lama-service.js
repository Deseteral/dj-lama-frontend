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

const DJLamaService = {
  status: {
    get: getStatus,
  },
  library: {
    get: getLibrary,
  },
};

export default DJLamaService;
