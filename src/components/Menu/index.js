import React from 'react';
import './Menu.css'
const Menu = props => {
  const menuItems = (props.menuItems) ? props.menuItems: [
    {
      "name": "Action",
      "id": 1,
      "link": "/action"
    },
    {
      "name": "Adventure",
      "id": 2,
      "link": "/adventure"
    },
    {
      "name": "Arcade",
      "id": 3,
      "link": "/arcade"
    },
    {
      "name": "Cooking",
      "id": 20,
      "link": "/cooking"
    }
  ]


  return (
    <nav>
      <ul className="navigation" role="navigation">
        
          {(menuItems !== undefined || menuItems.length > 0) &&
            menuItems.map(item=> (
              <li 
                key={item.id} 
                onClick={(event)=>{event.preventDefault(); props.categoryChange(item.name)} }
              ><a href={"/"+item.name.toLowerCase()}>
                {item.name}
                </a>
              </li>
            ))
          }
      </ul>
    </nav>
  );
};

export default Menu;