import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List'
import ListData from './List.data.json'

const listItems = ListData

storiesOf('List', module)
  .add('default', () => <List listItems={listItems} category={'All'} />)