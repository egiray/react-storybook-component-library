import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card'

const cardData= {
  "title": "Dragon io",
  "gameType": "html5",
  "description": "Dragon io features:\n• multiplayer dragon battles\n• beautiful environments",
  "instructions": "• WASD or arrow keys to move the dragon\n• Space tab to fly up\n• Left shift for sprint\n• Q to jump\n• C to fly down\n• R to dodge\n• Shift + left mouse click for breathing fire\n• Left mouse click to throw fireballs\n• Right mouse click for melee attack\n• T to chat\n• M to show map\n• Esc, tab for pause menu",
  "url": "https://html5.gamedistribution.com/c579ae734741444db81d403f9209e8d7/",
  "width": 960,
  "height": 600,
  "assetList": [
    {
      "name": "https://img.gamedistribution.com/c579ae734741444db81d403f9209e8d7-1280x550.jpeg"
    },
    {
      "name": "https://img.gamedistribution.com/c579ae734741444db81d403f9209e8d7-1280x720.jpeg"
    },
    {
      "name": "https://img.gamedistribution.com/c579ae734741444db81d403f9209e8d7-512x340.jpeg"
    },
    {
      "name": "https://img.gamedistribution.com/c579ae734741444db81d403f9209e8d7-512x512.jpeg"
    },
    {
      "name": "https://img.gamedistribution.com/c579ae734741444db81d403f9209e8d7-512x384.jpeg"
    }
  ],
  "categoryList": [
    {
      "name": "Multiplayer"
    },
    {
      "name": ".IO"
    }
  ],
  "tagList": [
    {
      "name": "dragon"
    },
    {
      "name": "dragons"
    },
    {
      "name": "webgl"
    },
    {
      "name": "#io"
    },
    {
      "name": "unity3d"
    }
  ],
  "bundleList": [
    
  ]
}

storiesOf('Card', module)
  .add('default', () => <Card {...cardData}/>)