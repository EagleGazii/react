import React, { Component } from 'react';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import Todo from '../Todo/Todo';
import './Todolist.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isAdding: false
        }
        this.addItem = this.addItem.bind(this);
        this.remove = this.remove.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    handleEdit(newTask, itemID) {
        const newTodos = this.state.todos.map(item => {
            if (item.id === itemID) {
                return { ...item, task: newTask }
            }
            return item;
        })
        this.setState({
            todos: newTodos
        })
    }
    handleClick() {
        this.setState({
            isAdding: true
        })
    }
    remove(itemID) {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== itemID)
        })
    }
    addItem(item) {

        this.setState(prevState => ({
            todos: [...prevState.todos, item]
        }))
    }
    render() {
        const todoList = this.state.todos.map(todo => <Todo key={todo.id} id={todo.id} edit={this.handleEdit} remove={this.remove} content={todo.task} />);
        let result;
        if (this.state.isAdding) {
            result = (
                <div className="TodoList-addForm">
                    <NewTodoForm newItem={this.addItem} />
                </div>
            )
        } else {
            result = (
                <div className="TodoList-addItem">
                    <button onClick={this.handleClick}>Add New Todo</button>
                </div>
            )
        }

        return (
            <div className="TodoList">
                <div className="TodoList-title">
                    <div className="TodoList-appTitle">
                        Todos List
                    </div>
                    <div className="TodoList-subTitle">
                        A Simple React App
                    </div>
                </div>

                <div className="TodoList-items">
                    {todoList}


                </div>
                <div className="TodoList-add">
                    {result}
                </div>



            </div>
        )
    }
}

export default TodoList
