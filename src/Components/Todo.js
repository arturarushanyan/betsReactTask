import React,{Component} from 'react';
import TodoListItem from './TodoListItem';
export default class Todo extends Component{
    render(){
        let filteredTodos = this.props.todos.filter((todo) => {
            return todo.completed === false;
        }).sort((prev,next)=>{
            return next.priority - prev.priority;
        });

        return (
            <div>
                {
                    filteredTodos.map((todo) => {
                        return (
                            <ul className={todo.priority === 2 ? 'high':  todo.priority === 1 ? 'medium' : ''} >
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