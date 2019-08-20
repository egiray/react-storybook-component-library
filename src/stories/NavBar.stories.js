import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../components/NavBar'
import menuItems from '../components/NavBar/MenuItems.json';

storiesOf('NavBar', module)
  .add('default', () => <NavBar menuItems={menuItems} />)