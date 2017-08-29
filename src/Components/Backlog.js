import React,{Component} from 'react';
import Todo from "./Todo";

export default class Backlog extends Component{
    render(){
        return (
            <div className="backlog">
                <p>I'm Backlog</p>
                <Todo/>
            </div>
        )
    }
}