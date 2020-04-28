// Class
class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello class</h1>
                <h1>Hello There</h1>
                <h1>Hello There</h1>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))

// function
function Hello() {
    return (
        <div>
            <h1>Hello function</h1>
            <h1>Hello There</h1>
            <h1>Hello There</h1>
        </div>
    )
}

ReactDOM.render(<Hello />, document.getElementById('root'))