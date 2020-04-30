class App extends React.Component {
  render() {
    return (
      <div>
        <Friend 
        name="Elton"
        hobbies={["Singing", "Dancing"]}
        />
        <Friend 
        name="Josh"
        hobbies={["Guitar", "Games"]}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))