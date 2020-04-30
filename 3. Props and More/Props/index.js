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
          bangs={4}
          img="https://source.unsplash.com/random"
          />
        <Hello 
        to="Cher" 
        from="Sunny"
        bangs={10}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))