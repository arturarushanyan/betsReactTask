import React,{Component} from 'react';

export default class TodoListItem extends Component{
    render(){
        return (
            <li>{this.props.listValue}</li>
        )
    }
}
