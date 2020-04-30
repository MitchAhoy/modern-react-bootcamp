class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="Mitch" 
          from="Paul" 
          num={3}
          data={[1,2,3,4,5]}
          isFunny
          // img="https://source.unsplash.com/random"
          />
        <Hello 
        to="Cher" 
        bangs={10}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))