import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super(props)
        this.state = {num: 1, isWinner: false}
        this.randNum = this.randNum.bind(this)
    }
    randNum() {
        const newNum = Math.floor(Math.random() * 10) + 1
        this.setState({num: newNum})

        newNum === 7 && this.setState({isWinner: true})
    }



    render() {
        return(
            <div>
                <h1>Number is {this.state.num}</h1>
                {this.state.isWinner ? 'WINNER' : <button onClick={this.randNum}>Click</button>}
            </div>
        )
    }
}

export default Clicker