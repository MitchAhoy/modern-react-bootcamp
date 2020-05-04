import React from 'react';
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery 
      title="Mini Lotto"
      numBalls={5}
      maxNum={10}
      />
    </div>
  );
}

export default App;
