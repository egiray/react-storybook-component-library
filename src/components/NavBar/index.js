import React from 'react';
import styled from 'styled-components';

const Menu = props => {
  const menuItems = (props.menuItems) ? props.menuItems : [
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

  const NavBar = styled.nav`
    display: flex;
		flex-direction: row;
    justify-content: space-between;    
    align-items:baseline;
    height:80px;
  `

  const Ul = styled.ul`
    list-style:none;
    display:flex;
  `

  const A = styled.a`
    display: block;
    padding: 1em;
    color: white;
  `

  return (
    <NavBar>
      <h3><A href="/">Game Portal Logo</A></h3>
      <Ul className="navigation" role="navigation">
        {(menuItems !== undefined || menuItems.length > 0) &&
          menuItems.map(item => (
            <li
              key={item.id}
              onClick={(event) => { event.preventDefault(); props.categoryChange(item.name) }}
            ><A href={"/" + item.name.toLowerCase()}>
                {item.name}
              </A>
            </li>
          ))
        }
      </Ul>
    </NavBar>
  );
};

export default Menu;