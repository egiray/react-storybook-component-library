import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './Menu'
import menuItems from './MenuItems.json';

storiesOf('Menu', module)
  .add('default', () => <Menu menuItems={menuItems} />)