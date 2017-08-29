import React,{Component} from 'react';
import TodoListItem from './TodoListItem';
export default class Todo extends Component{
    render(){
        return (
            <ul className="todo">
                <p>I am Todo</p>
                <TodoListItem/>
            </ul>
        )
    }
}