import React,{Component} from 'react';
import Todo from "./Todo";

export default class Backlog extends Component{
    render(){
        let todos = this.props.todos;
        // filtering todos that are NOT completed and sorting them
        let filteredTodos = todos.filter((todo) => {
            return todo.completed === false;
        }).sort((prev,next)=>{
            return next.priority - prev.priority;
        });


        // filtering todos that are COMPLETED and sorting them
        let doneTodos = todos.filter((todo) => {
            return todo.completed === true;
        }).sort((prev,next)=>{
            return next.priority - prev.priority;
        });

        return (
            <div className="backlog">
                <p>Backlog</p>
                <div className="backlog-section">
                    <h3>To Do</h3>
                    <Todo todos={filteredTodos}/>
                </div>
                <div className="backlog-section">
                    <h3>Done</h3>
                    <Todo todos={doneTodos}/>
                </div>
            </div>
        )
    }
}