import React from 'react';
import './App.css';
import Food from './Food'
import Meal from './Meal'
import NavBar from './NavBar'
import FoodSearch from './FoodSearch'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />


     <Switch>
     <Route 
      exact 
      path='/food/:name' 
      render={(routeProps) => <Food {...routeProps}/>}/>
     
     <Route 
      exact
      path='/food/:foodName/drink/:drinkName'
      render={(routeProps) => <Meal {...routeProps} />}
     />

     <Route 
      exact
      path='/'
      render={(routeProps) => <FoodSearch {...routeProps} />}
     />

     <Route 
      path='/'
      render={() => <h1>404 Error</h1>}
     />
  </Switch>

    </div>
  );
}

export default App;
