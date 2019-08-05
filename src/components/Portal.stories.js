import React from 'react';
import { storiesOf } from '@storybook/react';
import Portal from './Portal'


storiesOf('Portal', module)
  .add('default', () => <Portal category={'All'} />)