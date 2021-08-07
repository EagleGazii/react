import React, { Component } from 'react';
import './Coincontainer.css';
import Coin from '../Coin/Coin';
import { choice } from '../helper';


class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/G920.jpg" },
            { side: 'tails', url: "https://upload.wikimedia.org/wikipedia/commons/4/47/G921.jpg" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currentCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handlerClick = this.handlerClick.bind(this)
    }

    /*  flipCoin() {
         this.setState({ currentSide: this.props.coins[0].url })
         console.log(this.props.coins[0].url)
     } */
    flipCounter() {
        let randCoin = choice(this.props.coins)


        this.setState((currentState) => {
            return {
                currentCoin: randCoin,
                nFlips: currentState.nFlips + 1,
                nHeads: currentState.nHeads + (randCoin.side === "heads" ? 1 : 0),
                nTails: currentState.nTails + (randCoin.side === "tails" ? 1 : 0)
            }
        })




    }

    handlerClick() {
        this.flipCounter();
    }
    render() {
        return (
            <div>
                <h2>Let's Flip a Coin</h2>
                {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
                <button onClick={this.handlerClick}>Flip Me</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}

export default CoinContainer;
