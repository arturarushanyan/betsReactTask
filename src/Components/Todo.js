import React,{Component} from 'react';
import TodoListItem from './TodoListItem';
export default class Todo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let todos = this.props.todos;
        let id = todos.map((todo)=>{
            return todo.id;
        });
        console.log('from todo',todos);
        console.log('from todo',id);
        return (
            <div>
                {
                    todos.map((todo)=>{
                        return (
                            <ul className="todo" >
                                <li>{`Title: ${todo.title}`}</li>
                                <li>{`ID: ${todo.id}`}</li>
                                <li>{`Priority ${todo.priority}`}</li>
                                <li>{`AssigneeName: ${todo.assigneeName}`}</li>
                                <li>{`AssingeeID: ${todo.assigneeID}`}</li>
                            </ul>
                        )
                    })
                }
            </div>

        )
    }
}