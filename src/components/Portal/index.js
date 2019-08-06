import React from 'react'
import Menu from './Menu'
import List from './List';

const Portal = props => {
  return (
    <div>
      <Menu/>
      <List category='All'/>
    </div>
  )
}

export default Portal
