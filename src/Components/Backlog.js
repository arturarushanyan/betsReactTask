import React,{Component} from 'react';
import Todo from "./Todo";

export default class Backlog extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="backlog">
                <p>I'm backlog</p>
                <p>{this.props.taskID}</p>
                <Todo/>
            </div>
        )
    }
}