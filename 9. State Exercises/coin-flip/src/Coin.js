import React, { Component } from 'react'
import './Coin.css'
import heads from './heads.jpg'
import tails from './tails.jpg'

class Coin extends Component {
    render() {
        return(
            <img className="Coin" src={this.props.img === 0 ? heads : tails}/>
        )
    }
}

export default Coin