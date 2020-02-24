import https from 'https';

export const asyncRequest = (method, url) => new Promise((resolve, reject) => {
  https[method](url, (resp) => {
    resp.setEncoding('utf8');
    resp.on('data', (data) => {
      const body = JSON.parse(data);
      resolve(body);
    });
  }).on('error', (e) => {
    reject(e);
  });
});
