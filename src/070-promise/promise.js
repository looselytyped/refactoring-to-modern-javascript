/* eslint-disable */
import https from 'https';
import {
  asyncRequest,
} from '../utils/async-request';

const postsUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

function callBackGet(method, url) {
  https[method](url, (postsResponse) => {
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

const p = asyncRequest('get', postsUrl)
  .then(posts => {
    return posts.map(p => p.id);
  })
  .then(ids => {
    const calls = [];
    for (const id of ids) {
      const postUrl = `${postsUrl}/${id}`;
      calls.push(asyncRequest('get', postUrl))
    }
    return Promise.all(calls);
  })
  .then(individualPosts => {
    for (const p of individualPosts) {
      // console.log('promise based', p);
    }
  });

(async function() {
  const posts = await asyncRequest('get', postsUrl);
  const ids = posts.map(p => p.id);
  const calls = [];
  for (const id of ids) {
    const postUrl = `${postsUrl}/${id}`;
    calls.push(asyncRequest('get', postUrl))
  }

  const individualPosts = await Promise.all(calls);
  for (const p of individualPosts) {
    // console.log('async based', p);
  }
}());
