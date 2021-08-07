import React, { Component } from 'react'
import './ball.css'

class Ball extends Component {

    render() {
        return (
            <div className="Ball">
                <div className="Ball-number">{this.props.number}</div>
            </div>
        )
    }
}
export default Ball;
