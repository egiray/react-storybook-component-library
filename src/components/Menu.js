import React from 'react';

const Menu = props => {
  const menuItems = props.menuItems

  
  return (
    <div>
      {menuItems.map(item=> {
        return (
          <div key={item.id}>
              <a href={item.link}>{item.name}</a>
          </div>
        )
      })}
    </div>
  );
};

export default Menu;