import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../components/Menu'
import menuItems from '../components/Menu/MenuItems.json';

storiesOf('Menu', module)
  .add('default', () => <Menu menuItems={menuItems} />)