import React from 'react';
import './App.css';
import Pokegame from './Pokegame'
import Pokedex from './Pokedex'

function App() {
  return (
    <div className="App">
      <h1 className="Pokedex-title">Pokedex</h1>
      <Pokedex />
    </div>
  );
}

export default App;
