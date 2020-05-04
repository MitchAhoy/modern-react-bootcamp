import React, { Component } from 'react'
import './Ball.css'

class Ball extends Component {
    render() {
        return(
            <div className="Ball">
                <h3>{this.props.num}</h3>
            </div>
        )
    }
}

export default Ball