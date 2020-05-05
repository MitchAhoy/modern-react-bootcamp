import React, { Component } from 'react'
import './CoinFlip.css'
import Coin from './Coin'

class CoinFlip extends Component {

    constructor(props) {
        super(props)
        this.state = {
            coinSide: 0,
            numHeads: 0,
            numTails: 0
        }

        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin() {
        const outcome = Math.floor(Math.random() * 2)
        this.setState(st => {return {
            coinSide: st.coinSide = outcome, 
            numHeads: outcome === 0 ? st.numHeads + 1 : st.numHeads, 
            numTails: outcome === 1 ? st.numTails + 1 : st.numTails
        }})
    }

    render() {
        return(
            <div className="CoinFlip">
                <h1>Let's flip a coin!</h1>
                <Coin img={this.state.coinSide}/>
                <button className="CoinFlip-btn" onClick={this.flipCoin}>FLIP ME!</button>
                <p>Out of {this.state.numHeads + this.state.numTails} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails</p>
            </div>
        )
    }
}

export default CoinFlip