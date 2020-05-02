import React, {Component} from 'react'
import Dog from './Dog'

class App extends Component {
    
    render() {
        console.log('app working')
      return (
        <div>
            <Dog />
            <h1>Hello</h1>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))