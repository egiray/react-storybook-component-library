import { configure } from '@storybook/react';
// import '../src/index.css';

// function loadStories() {
//   require('../src/stories');
// }

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
