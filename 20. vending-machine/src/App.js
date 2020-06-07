import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine'
import Chips from './Chips'
import Chocolate from './Chocolate'
import IceCream from './IceCream'
import TopNav from './TopNav'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <TopNav />

      <Switch>
        <Route exact path='/' render={() => <VendingMachine />} />
        <Route exact path='/chips' render={() => <Chips />} />
        <Route exact path='/chocolate' render={() => <Chocolate />} />
        <Route exact path='/ice-cream' render={() => <IceCream />} />
      </Switch>
    </div>
  );
}

export default App;
