import { configure } from '@storybook/react';
// import '../src/index.css';

// function loadStories() {
//   require('../src/stories');
// }

const req = require.context('../src/stories', true, /\.stories.js$/);
console.log("REQ", req)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
