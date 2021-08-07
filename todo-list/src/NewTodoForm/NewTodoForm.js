import React, { Component } from 'react';
import './Newtodoform.css';
import { v4 as uuidv4 } from 'uuid';


class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            endDate: '',
            importantLevel: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newTodo = {
            ...this.state, id: uuidv4()
        }
        this.props.addTodo(newTodo)

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="TodoForm">
                <label className="TodoForm-label" htmlFor="title">Title</label>
                <input className="TodoForm-input" type="text" maxLength="20" id="title" name="title" onChange={this.handleChange} />
                <label className="TodoForm-label" htmlFor="content">Content</label>
                <input className="TodoForm-input" type="text" maxLength="100" id="content" name="content" onChange={this.handleChange} />
                <label className="TodoForm-label" htmlFor="endDate">End Date</label>
                <input className="TodoForm-input" type="time" id="endDate" name="endDate" onChange={this.handleChange} />
                <label className="TodoForm-label" htmlFor="important-level">Important Level</label>
                <div id="important-level" className="TodoForm-input" onChange={this.handleChange}>
                    <label htmlFor="red-level" className="red">Red</label>
                    <input type="radio" id="red-level" name="importantLevel" value={"red"} />
                    <label htmlFor="orange-level" className="orange">Orange</label>
                    <input type="radio" id="orange-level" name="importantLevel" value={"orange"} />
                    <label htmlFor="green-level" className="green">Green</label>
                    <input type="radio" id="green-level" name="importantLevel" value={"green"} />
                </div>


                <button className="TodoForm-button">Add New Todo</button>
            </form>
        )
    }
}

export default NewTodoForm
