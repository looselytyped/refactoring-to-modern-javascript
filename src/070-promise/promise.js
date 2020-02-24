import https from 'https';
import {
  asyncRequest,
} from '../utils/async-request.js';

const postsUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

function callBackGet(method, url) {
  https[method](postsUrl, (postsResponse) => {
    postsResponse.setEncoding('utf8');
    postsResponse.on('data', (body) => {
      const posts = JSON.parse(body);
      for (let i = 0; i < posts.length; i++) {
        const postUrl = `${postsUrl}/${posts[i].id}`;
        https[method](postUrl, (postResponse) => {
          postResponse.on('data', (body) => {
            const post = JSON.parse(body);
            console.log('callback based', post);
          });
        });
      }
    });
  }).on('error', (e) => {
    console.error(e);
  });
}

