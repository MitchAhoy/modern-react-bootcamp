import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    constructor(props) {
        super(props)

    }

    

    render() {
        console.log(this.props)
        return(
            <i className={this.props.className}></i>
        )
    }
}

export default Die

