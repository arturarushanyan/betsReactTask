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
                this.setState((prevState) =>{
                    prevState.todos[Math.floor(Math.random()*this.state.todos.length)].completed = true;
                })
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
