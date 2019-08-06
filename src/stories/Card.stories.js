import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/Card'
import ListData from '../components/List/List.data.json'

const cardData = ListData[0];

storiesOf('Card', module)
  .add('default', () => <Card {...cardData}/>)