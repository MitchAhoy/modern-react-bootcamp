const getMood = () => {
    const moods = ['angry', 'hungry', 'silly', 'quiet']
    return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>Current mood: {getMood()}</h1>
                <img src="https://images.unsplash.com/photo-1587982789909-8fa80a3f840b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))

