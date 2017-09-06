import React,{Component} from 'react';
import TodoListItem from './TodoListItem';
export default class Todo extends Component{
    render(){
        let todos = this.props.todos;
        return (
            <div>
                {
                    todos.map((todo,index) => {
                        return (
                            <ul key={index} className={todo.priority === 2 ? 'high':  todo.priority === 1 ? 'medium' : ''} >
                                <TodoListItem listValue={`Title: ${todo.title}`}/>
                                <TodoListItem listValue={`Desicription: ${todo.desicription}`}/>
                                <TodoListItem listValue={`TodoID: ${todo.id}`}/>
                                <TodoListItem listValue={`Priority ${todo.priority}`}/>
                                <TodoListItem listValue={`AssigneeName: ${todo.assigneeName}`}/>
                                <TodoListItem listValue={`AssingeeID: ${todo.assigneeID}`}/>
                                <TodoListItem listValue={`Completed: ${todo.completed}`}/>
                            </ul>
                        )
                    })
                }
            </div>

        )
    }
}