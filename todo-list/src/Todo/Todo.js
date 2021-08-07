import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleRemove() {
        this.props.remove(this.props.id)
    }
    handleUpdate() {

    }

    render() {

        const todoClassName = (this.props.backgroundColor === "red" && "Todo-red") || (this.props.backgroundColor === "green" && "Todo-green") || (this.props.backgroundColor === "orange" && "Todo-orange");


        return (
            <div className={`Todo ${todoClassName}`}>
                <div className="Todo-title">{this.props.title}</div>
                <div className="Todo-content">
                    {this.props.content}
                </div>
                <div className="Todo-endDate">
                    End Time: {this.props.endDate}
                </div>
                <div className="Todo-buttons">
                    <button onClick={this.handleRemove}>Remove</button>
                </div>
            </div>
        )
    }
}

export default Todo
