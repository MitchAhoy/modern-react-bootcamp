import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    constructor(props) {
        super(props)
        this.state = {num: 1}
    }

    render() {
        return(
            <i className={`fas fa-dice-${this.props.num}`}></i>
        )
    }
}

export default Die