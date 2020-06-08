import React from 'react'
import NavBar from './NavBar'
import dogData from './dogData'
import DogSelect from './DogSelect'
import DogDetail from './DogDetail'
import { Switch, Route } from 'react-router-dom'

function App() {

  const getDog = props => {
    let name = props.match.params.name
    let currentDog = dogData.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase())

    return <DogDetail {...props} dog={currentDog} />
  }


  return (
    <div className='App'>
      <NavBar dogs={dogData.dogs} />

      <Switch>

        <Route
          exact
          path='/dogs'
          render={() => <DogSelect dogs={dogData} />}
        />

        <Route
          exact
          path='/dogs/:name'
          render={(renderProps) => getDog(renderProps)}
        />

        <Route />

      </Switch>






    </div>
  )
}

export default App
