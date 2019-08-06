import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../components/List';

storiesOf('List', module)
  .add('default', () => <List category={'All'} />)