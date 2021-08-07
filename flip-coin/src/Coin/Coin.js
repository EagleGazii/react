import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {

    render() {

        return (
            <div >
                <img className={this.props.info != null ? "Coin" : ""} src={this.props.info.url} alt={this.props.info.side} />
            </div>
        )
    }
}

export default Coin
