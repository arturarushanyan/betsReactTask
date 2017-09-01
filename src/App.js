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
        this.intervalID = setInterval(()=>{
            this.count++;
            if(this.count % 5 !== 0){
                this.setState({
                    todos: [...this.state.todos, generateNewTodo()]
                    }
                );
            } else {
                this.setState({
                    todos: [...this.state.todos, ...this.state.todos[Math.floor(Math.random()*this.state.todos.length)].completed = true]
                    });
            }
            console.log('state now',this.state);
        },3000);

    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
  render() {
    return (
      <div className="App">
          <h2>I'm Top Layer</h2>
        <Backlog todos = {this.state.todos}/>
        <Statistics/>
      </div>
    );
  }
}



export default App;















































