import React, { Component } from 'react';
import './NewTodoForm.css';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.task !== '') {
            const newTodo = {
                ...this.state, id: uuidv4()
            }
            this.props.newItem(newTodo);
            this.setState({
                task: ''
            })
        }

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task"></label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    maxLength="25"
                    onChange={this.handleChange}
                    value={this.state.task}
                    placeholder="New Task" />
                <button>Add</button>
            </form>
        )
    }
}

export default NewTodoForm
