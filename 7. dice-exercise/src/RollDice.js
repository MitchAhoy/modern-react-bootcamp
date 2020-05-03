import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div className="RollDice">
                <Die 
                num="two"
                />
                <Die 
                num="four"
                />

                <button className="RollDice-btn">Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice