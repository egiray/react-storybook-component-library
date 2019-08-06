import React from 'react';

const Menu = props => {
  const menuItems = props.menuItems


  return (
    <ul>
        {(menuItems !== undefined || menuItems.length > 0) &&
          menuItems.map(item=> (
            <li key={item.id} onClick={()=>props.categoryChange(item.name)}>{item.name}</li>
          ))
        }
    </ul>
  );
};

export default Menu;