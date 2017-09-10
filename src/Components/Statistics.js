import React,{Component} from 'react';

export default class Statistics extends Component{
    render(){
        // filtering todos that are completed and reducing them to a different object
        // where key is the assignee name and value is done task count {John:1,Doe:2}
        let filterCompletedTodos = this.props.todos.filter((todo) => {
            return todo.completed === true;
        }).reduce((stats,task) => {
            stats[task.assigneeName] = stats[task.assigneeName] || [];
            stats[task.assigneeName]++;
            return stats;

        },{});

        // making an array of objects from the reduced object above
        // don't know if it's the best solution, however I wanted to have a final array of objects
        // for easily map through them in jsx....
        let finalTodos = Object.keys(filterCompletedTodos).map(function(key) {
            return { assignee: key, doneTasks: filterCompletedTodos[key] };
        });

        return (
            <div className="statistics">
                <p>I'm Statistics</p>
                <tablle className="dev-table">
                        <tr>
                            <th>Assignee Name</th>
                            <th>Tasks Done</th>
                        </tr>
                    {
                        finalTodos.map((stat,index) => {
                            return (
                                <tr key={index}>
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