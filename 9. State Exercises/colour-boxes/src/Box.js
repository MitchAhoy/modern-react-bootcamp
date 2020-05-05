import React, { Component } from 'react'
import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = { currColour: this.props.colour }
    }
    render() {
        return (
            <div className="Box" onClick={this.props.onClick} style={{ backgroundColor: this.props.colour }}></div>
        )
    }
}

export default Box