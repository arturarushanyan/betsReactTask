import React,{Component} from 'react';

export default class Statistics extends Component{
    render(){
        let filterCompletedTodos = this.props.todos.filter((todo) => {
            return todo.completed === true;
        }).reduce((stats,task) => {
            stats[task.assigneeName] = stats[task.assigneeName] || [];
            stats[task.assigneeName]++;
            return stats;

        },{});

        let finalTodos = Object.keys(filterCompletedTodos).map(function(key) {
            return { assignee: key, doneTasks: filterCompletedTodos[key] };
        });
        console.log('from stats',filterCompletedTodos);

        return (
            <div className="statistics">
                <p>I'm Statistics</p>
                <tablle className="dev-table">
                        <tr>
                            <th>Assignee Name</th>
                            <th>Tasks Done</th>
                        </tr>
                    {
                        finalTodos.map((stat) => {
                            return (
                                <tr>
                                    <td>{stat.assignee}</td>
                                    <td>{stat.doneTasks}</td>
                                </tr>
                            )
                        })
                    }

                </tablle>
            </div>
        )
    }
}