import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: this.randNum(),
            num2: this.randNum(),
            clicked: false
        }
        this.randNum = this.randNum.bind(this)
        this.rollDice = this.rollDice.bind(this)

    }

    randNum() {
        const rand = Math.floor(Math.random() * 6) + 1
        switch (rand) {
            case 1:
                return 'one'
            case 2:
                return 'two'
            case 3:
                return 'three'
            case 4:
                return 'four'
            case 5:
                return 'five'
            case 6:
                return 'six'
        }
    }

    rollDice() { 
        this.setState({clicked: true})
        setTimeout(() => {
            this.setState({num1: this.randNum(), num2: this.randNum(), clicked: false})
        }, 1500)   
    }

    render() {
        return(
            <div className="RollDice">
                <Die 
                className={`fas fa-dice-${this.state.num1} ${this.state.clicked && "RollDice-roll"}`}
                clicked={this.state.clicked}
                />
                <Die 
                className={`fas fa-dice-${this.state.num2} ${this.state.clicked && "RollDice-roll"}`}
                clicked={this.state.clicked}
                />


                <button className="RollDice-btn" onClick={this.rollDice} disabled={this.state.clicked} >{this.state.clicked ? 'Rolling...' : 'Roll the dice!'}</button>
            </div>
        )
    }
}

export default RollDice
