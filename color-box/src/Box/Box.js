import React, { Component } from 'react';
import { choice } from '../hepler';
import './Box.css'


class Box extends Component {


    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.allColors)
        }
        this.handlerClick = this.handlerClick.bind(this);
    }

    pickColor() {

        let pickedColor;
        do {
            pickedColor = choice(this.props.allColors);
        } while (pickedColor === this.state.color)


        this.setState({ color: pickedColor })
    }

    handlerClick() {

        this.pickColor();
    }
    render() {
        return (
            <div className="BoxContainer" >
                <div className="Shape" onClick={this.handlerClick} style={{ backgroundColor: this.state.color }} />
            </div>
        )
    }
}

export default Box
