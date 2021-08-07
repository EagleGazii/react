import React, { Component } from 'react';
import './Box.css';

class Box extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {

        this.props.deleteBox(this.props.id);
    }
    render() {
        return (
            <div className="Box">
                <div
                    style={
                        { height: this.props.height, width: this.props.width, backgroundColor: this.props.backgroundColor, margin: '0px 10px' }
                    } />
                <button onClick={this.handleClick}>Remove Item</button>

            </div>
        )
    }
}

export default Box;
