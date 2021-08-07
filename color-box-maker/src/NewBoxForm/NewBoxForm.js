import React, { Component } from 'react';
import './Newboxform.css';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            width: '',
            height: '',
            backgroundColor: 'black'

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!(isNaN(this.state.width) || isNaN(this.state.height))) {
            const newbox = {
                ...this.state, id: uuidv4()
            }
            this.props.addBox(newbox);
        }

        this.setState({

            width: '',
            height: '',

        })
    }
    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value

        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="AddBox">
                <label className="AddBox-label" htmlFor="width">Width: </label>
                <input className="AddBox-input" type="text" id="width" name="width" value={this.state.width} onChange={this.handleChange} required />
                <label className="AddBox-label" htmlFor="height">Height: </label>
                <input className="AddBox-input" type="text" id="height" name="height" value={this.state.height} onChange={this.handleChange} required />
                <label className="AddBox-label" htmlFor="backgroundColor">Color: </label>
                <input className="AddBox-input" type="color" id="backgroundColor" name="backgroundColor" onChange={this.handleChange} />
                <button className="AddBox-button" >Add New Box</button>
            </form>
        )
    }
}

export default NewBoxForm
