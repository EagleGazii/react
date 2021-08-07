import React, { Component } from 'react';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.content
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleRemove() {
        this.props.remove(this.props.id)
    }
    handleEdit() {

        this.setState({
            isEditing: true
        })

    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.task !== '') {
            this.props.edit(this.state.task, this.props.id)
            this.setState({
                isEditing: false,
                isDeleting: false
            })
        }

    }
    handleClick() {
        this.setState({
            isDeleting: true
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="task"></label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        maxLength="25"
                        onChange={this.handleChange}
                        value={this.state.task}
                    />
                    <button>Save</button>
                </form>
            )
            //new edit form as new component
        } else {
            result = (
                <div className="Todo">
                    <div className="Todo-content" onClick={this.handleClick}>
                        {this.state.isDeleting ? <del>{this.props.content}</del> : this.props.content}

                    </div>
                    <div className="Todo-buttons">
                        <div className="Todo-edit">
                            {!this.state.isDeleting && <i><MdEdit onClick={this.handleEdit} /></i>}

                        </div>
                        <div className="Todo-delete">
                            <i><RiDeleteBin6Fill onClick={this.handleRemove} /></i>
                        </div>
                    </div>

                </div>
            )
        }
        return result;

    }
}

export default Todo
