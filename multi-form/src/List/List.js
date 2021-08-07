import React, { Component } from 'react';
import './List.css';
import { v4 as uuidv4 } from 'uuid';
import AddItem from './AddItem/AddItem';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    name: "Gazmor", surname: "Abdiu", age: 25
                },
                {
                    name: "Elshani", surname: "Kamberi", age: 27
                },
                {
                    name: "Arion", surname: "Aliu", age: 23
                }
            ]
        }

        this.addItem = this.addItem.bind(this);
    }
    addItem(item) {

        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
    }
    render() {
        return (
            <div>
                <h1>List</h1>
                <ul>
                    {this.state.items.map(item => (
                        <li key={uuidv4()}>{item.name} {item.surname} {item.age}</li>
                    ))}
                </ul>
                <div>
                    <AddItem addItem={this.addItem} />
                </div>
            </div>
        )
    }
}


export default List;
