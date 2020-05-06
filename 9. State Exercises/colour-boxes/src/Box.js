import React, { Component } from 'react'
import './Box.css'

class Box extends Component {
    render() {
        return (
            <div className="Box" onClick={this.props.onClick} style={{ backgroundColor: this.props.colour }}></div>
        )
    }
}

export default Box