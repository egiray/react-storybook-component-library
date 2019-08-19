import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import List from './components/List'
import menuItems from './components/Menu/MenuItems.json'
import GamePlay from './components/GamePlay'

function App() {
  const [category, setCategory] = useState('All')
  const [game, setGame] = useState();

  const handleCategoryChange = category => {
    setCategory(category)
    setGame()
  }

  const handleGameChange = game => {
    console.log(game)
    setGame(game)
  }


  return (
    <div className="App">
      <header>
        <NavBar menuItems={menuItems} categoryChange={handleCategoryChange} />
      </header>
      <main>
        {!game ?
          <List category={category} gameChange={handleGameChange} />
          :
          <GamePlay {...game} />
        }

      </main>
    </div>
  );
}

export default App;
