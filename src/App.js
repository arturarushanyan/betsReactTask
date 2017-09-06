import React, { Component } from 'react';
import Backlog from "./Components/Backlog";
import Statistics from "./Components/Statistics";
import generateNewTodo from "./helpers/generateNewTodo";
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : []
        };
        this.count = 0;
        var arr = ['a','b','c'];
        var arr1 = [...arr, ...arr[2]= 'e'];
        console.log(arr1);
    }

    componentDidMount(){


        this.intervalID = setInterval(() => {
            this.count++;
            if(this.count % 5 !== 0){
                this.setState({
                    todos: [...this.state.todos, generateNewTodo()]
                    }
                );
            } else {
                let completedTodo = this.state.todos[Math.floor(Math.random()*this.state.todos.length)];
                console.log('completedTodo',completedTodo);
                this.setState({
                    todos: [...this.state.todos, ...completedTodo.completed = true]
                    });
            }
            console.log('state now',this.state);
        },1000);

    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
  render() {
    return (
      <div className="App">
          <h2>Reactjs Autogenerate Todo List!</h2>
        <Backlog todos = {this.state.todos}/>
        <Statistics todos = {this.state.todos}/>
      </div>
    );
  }
}



export default App;
