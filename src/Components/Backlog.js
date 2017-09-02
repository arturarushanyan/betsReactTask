import React,{Component} from 'react';
import Todo from "./Todo";

export default class Backlog extends Component{
    render(){
        let todos = this.props.todos;
        return (
            <div className="backlog">
                <p>I'm backlog</p>
                <Todo todos={todos}/>
            </div>
        )
    }
}