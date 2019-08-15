import React from 'react';
import './Menu.css'
const Menu = props => {
  const menuItems = props.menuItems


  return (
    <ul className="navigation" role="navigation">
      
        {(menuItems !== undefined || menuItems.length > 0) &&
          menuItems.map(item=> (
            <li 
              key={item.id} 
              onClick={()=>props.categoryChange(item.name)}
            ><a href={"/"+item.name.toLowerCase()}>
              {item.name}
              </a>
            </li>
          ))
        }
    </ul>
  );
};

export default Menu;