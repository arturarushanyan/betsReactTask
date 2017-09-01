import React,{Component} from 'react';
import Developers from "../data";

export default class Statistics extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let completedTodos = this.props.todos.filter((todo) => {
            return todo.completed === true;
        });
        console.log('from stats',completedTodos);
        return (
            <div className="statistics">
                <p>I'm Statistics</p>
                <tablle className="dev-table">
                    <thead>
                        <tr>
                            <th>Assignee Name</th>
                            <th>Tasks Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Artur</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </tablle>
            </div>
        )
    }
}