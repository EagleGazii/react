import React, { Component } from 'react';
import Box from '../Box/Box';
import './Boxcontainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 15,
        allColors: ["black", "gray", "white", "red", "purple", "green", "yellow", "blue"]
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map((item) => <Box allColors={this.props.allColors} />)
        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer
