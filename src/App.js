import React, { Component } from 'react';
import Backlog from "./Components/Backlog";
import Statistics from "./Components/Statistics";
import generateNewTodo from "./generateNewTodo";
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : []
        };
    }

    componentDidMount(){
        console.log("did mount working");
        this.intervalID = setInterval(()=>{
            this.setState({
                todos: [...this.state.todos, generateNewTodo()]
                }
            );
            console.log(this.state);
        },3000);

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















































