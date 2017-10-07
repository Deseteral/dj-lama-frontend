const SERVICE_URL = 'http://localhost:8080';

function getStatus() {
  return new Promise((resolve, reject) => {
    fetch(`${SERVICE_URL}/status`)
      .then(data => data.json())
      .then(status => resolve(status))
      .catch(e => reject(e));
  });
}

const DJLamaService = {
  status: {
    get: getStatus,
  },
};

export default DJLamaService;
