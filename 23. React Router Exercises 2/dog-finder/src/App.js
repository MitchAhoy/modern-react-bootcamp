import React from 'react'
import NavBar from './NavBar'
import dogData from './dogData'
import DogSelect from './DogSelect'
import { Switch, Route } from 'react-router-dom'

function App () {

  
 

  return (
    <div className='App'>
      <NavBar />
  
    <Switch>
      <Route path='/dogs'></Route>
    </Switch>
    <DogSelect dogs={dogData}/>



    </div>
  )
}

export default App
