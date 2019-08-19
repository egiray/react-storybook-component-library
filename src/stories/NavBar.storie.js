import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../components/NavBar'


storiesOf('NavBar', module)
  .add('default', () => <NavBar/>)