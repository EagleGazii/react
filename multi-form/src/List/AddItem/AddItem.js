import React, { Component } from 'react';
import './Additem.css';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            age: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!(this.state.name == '' || this.state.surname == '' || this.state.age == '')) {
            this.props.addItem(this.state);
            this.setState({
                name: '',
                surname: '',
                age: ''
            })
        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="AddItem">
                <label className="AddItem-label" htmlFor="name">Name: </label>
                <input className="AddItem-input" type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                <label className="AddItem-label" htmlFor="surname">Surname: </label>
                <input className="AddItem-input" type="text" id="surname" name="surname" value={this.state.surname} onChange={this.handleChange} />
                <label className="AddItem-label" htmlFor="age">Age: </label>
                <input className="AddItem-input" type="text" id="age" name="age" value={this.state.age} onChange={this.handleChange} />
                <button className="AddItem-button" >Add Person!</button>
            </form>
        )
    }
}

export default AddItem;
