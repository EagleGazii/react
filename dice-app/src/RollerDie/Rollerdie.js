import React, { Component } from 'react'
import Die from '../Die/Die';
import './Rollerdie.css';

class RollerDie extends Component {
    static defaultProps = {
        side: ["one", "two", "three", "four", "five", "six"]

    }

    constructor(props) {
        super(props);
        this.state = {
            firstDiceIndex: "one",
            secondDiceIndex: "two",
            rolling: false
        }


        this.handlerClick = this.handlerClick.bind(this);
    }
    randomNumber = (min, max) => {
        return Math.floor(Math.random() * max) + min
    }
    handlerClick(event) {
        let firstItem = this.props.side[this.randomNumber(0, this.props.side.length)];
        let secondItem = this.props.side[this.randomNumber(0, this.props.side.length)];

        this.setState({
            firstDiceIndex: firstItem,
            secondDiceIndex: secondItem,
            rolling: true
        })

        //wait a second and change state
        setInterval(() => {
            this.setState({ rolling: false })
        }, 2000);
    }
    render() {
        return (
            <div className="Rollerdie" >
                <div className="Rollerdie-item">
                    <Die face={this.state.firstDiceIndex} />
                    <Die face={this.state.secondDiceIndex} />
                </div>
                <div className="Rollerdie-button">
                    <button onClick={this.handlerClick} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Rolling me"}</button>
                </div>


            </div>
        )
    }
}

export default RollerDie;
