import React, { Component } from 'react'
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lotteryNums: this.generate()
        }
        this.generate = this.generate.bind(this)
    }

    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    generate() {
        let nums = [...new Array(this.props.numBalls)]
        let numList = nums.map(num => num = Math.floor(Math.random() * this.props.maxNum ) + 1)
        this.setState(st => {return {lotteryNums: st = numList}})
        return numList
    }

    render() {
        return(
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div className="Lottery-nums">
                    {this.state.lotteryNums.map(num => <Ball num={num}/>)}
                </div>
                <button className="Lottery-btn" onClick={this.generate}>Generate</button>
            </div>
        )
    }
}

export default Lottery