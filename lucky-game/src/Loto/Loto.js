import React, { Component } from 'react'
import './loto.css';
import Ball from '../Ball/Ball'

class Loto extends Component {
    static defaultProps = {
        maxBall: 5,
        maxNumber: 40,
        title: "Loto"
    }
    constructor(props) {
        super(props);
        this.state = {
            numbers: Array.from({ length: this.props.maxBall })
        }
        this.handleClcik = this.handleClcik.bind(this);

    }



    lotoGenerate() {
        this.setState(currentState => ({
            numbers: this.state.numbers.map((item) => Math.floor(Math.random() * this.props.maxNumber) + 1)
        }))




        // Different numbers in the game all time
        /* let newArray = [this.props.maxBall]
        for (let index = 0; index < this.props.maxBall; index++) {

            let randNumber = Math.floor(Math.random() * this.props.maxNumber) + 1;
            let check = newArray.find((item) => item === randNumber);

            if (check === undefined) {
                newArray[index] = randNumber;
             
            } else {
                index -= 1;
            }


        }

        this.setState({ numbers: newArray }) */

    }

    handleClcik() {


        this.lotoGenerate();

    }



    render() {
        return (
            <div className="Loto">
                <div className="Loto-title">{this.props.title}</div>
                <div className="Loto-items">
                    {this.state.numbers.map((number) => <Ball number={number} />)}
                </div>
                <button className="Loto-button" onClick={this.handleClcik}>Generate</button>
            </div>
        )
    }
}

export default Loto;
