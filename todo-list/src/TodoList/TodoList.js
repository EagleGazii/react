import React, { Component } from 'react';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import Todo from '../Todo/Todo';
import './Todolist.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [

            ]
        }
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    update(item) {

    }
    remove(itemID) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== itemID)
        })
    }
    addTodo(item) {
        this.setState(prevState => ({
            todos: [...prevState.todos, item]
        }))
        console.log(this.state.todos[0])
    }



    render() {
        return (
            <div className="TodoList">
                <div className="TodoList-items">
                    {this.state.todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} backgroundColor={todo.importantLevel} content={todo.content} endDate={todo.endDate} update={this.update} remove={this.remove} />)}
                </div>
                <div className="TodoList-form">
                    <NewTodoForm addTodo={this.addTodo} />
                </div>
            </div>

        )
    }
}

export default TodoList
