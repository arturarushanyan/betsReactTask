import React,{Component} from 'react';

export default class TodoListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let todos = this.props.todos;
        console.log('from todolistitem',todos);
        return (
            <li className="todo-list-item">{this.props}</li>
        )
    }
}
