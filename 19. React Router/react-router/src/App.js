import React from 'react';
import Dog from './Dog'
import About from './About'
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/dog' component={Dog} />
      </Switch>
    </div>

  );
}

export default App;
