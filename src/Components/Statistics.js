import React,{Component} from 'react';

export default class Statistics extends Component{
    render(){
        let completedTodos = this.props.todos.filter((todo) => {
            return todo.completed === true;
        });
        console.log('from stats',completedTodos);
        return (
            <div className="statistics">
                <p>I'm Statistics</p>
                <tablle className="dev-table">
                        <tr>
                            <th>Assignee Name</th>
                            <th>Tasks Done</th>
                        </tr>
                        <tr>
                            <td>Artur</td>
                            <td>2</td>
                        </tr>
                </tablle>
            </div>
        )
    }
}