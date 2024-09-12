// use fakeFetch function with 2 websites
// - https://youtube.com
// - https://google.com

// one website will always take longer, but it's random which one

// no way to know how long that they will take

// it should console.log() the response objects in order,
// regardless of how long each takes:
// - YouTube first
// - Google second

// example:
// { message: 'answer from https://youtube.com', time: '1661 ms' }
// { message: 'answer from https://google.com', time: '1461 ms' }

// restrictions:
// - cannot use async/await
// - fakeFetch functions cannot be moved

import { fakeFetch } from './util/fakeFetch.js';

// 1. Create array
const responses = [];

// 2. Start fetching YouTube
fakeFetch('https://youtube.com')
  .then((youtubeResponse) => {
    // Either 5 or 6. Response comes back from YouTube
    responses[0] = youtubeResponse;

    // If the Google response is already there, log both responses
    if (responses[1]) {
      console.log(responses);
    }
    // this could also be written like this:
    // if (responses.length === 2) { .. }
  })
  .catch((error) => console.error(error));

// 3. Start fetching Google
fakeFetch('https://google.com')
  .then((googleResponse) => {
    // Either 5 or 6. Response comes back from Google
    responses[1] = googleResponse;

    // If the YouTube response is already there, log both responses
    if (responses[0]) {
      console.log(responses);
    }
  })
  .catch((error) => console.error(error));

// // 4. Log response
// console.log(responses);

// // In most cases, you can use `await Promise.all`
// console.log(
//   await Promise.all([
//     fakeFetch('https://youtube.com'),
//     fakeFetch('https://google.com'),
//   ]),
// );

// // Or the slower version with await
// console.log(await fakeFetch('https://youtube.com'));
// console.log(await fakeFetch('https://google.com'));
