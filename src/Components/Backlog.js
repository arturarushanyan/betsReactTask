import React,{Component} from 'react';
import Todo from "./Todo";

export default class Backlog extends Component{
    constructor(props){
        super(props);
    }
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