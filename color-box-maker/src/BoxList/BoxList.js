import React, { Component } from 'react';
import Box from '../Box/Box';
import './Boxlist.css';
import { v4 as uuidv4 } from 'uuid';
import NewBoxForm from '../NewBoxForm/NewBoxForm';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [

            ]
        }
        this.addBox = this.addBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }

    addBox(item) {

        this.setState(prevState => ({
            boxes: [...prevState.boxes, item]
        }))
    }

    deleteBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <div className="BoxList-item">
                <Box key={box.id} id={box.id} width={`${box.width}px`} height={`${box.height}px`} backgroundColor={`${box.backgroundColor}`} deleteBox={this.deleteBox} />
            </div>

        ));
        return (
            <div className="BoxList">
                <div className="BoxList-items">
                    {boxes}
                </div>
                <div>
                    <NewBoxForm addBox={this.addBox} />
                </div>
            </div>
        )
    }
}

export default BoxList
