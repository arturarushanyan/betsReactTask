import React, { Component } from 'react';
import Backlog from "./Components/Backlog";
import Statistics from "./Components/Statistics";
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            td011:{
                id: 1001,
                priority: 2,
                title: 'asdf001',
                desicription: "desc001",
                assignee: "Artur",
                completed: false
            }
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                td011:{
                    id: Math.random()
                }
            })
        },3000)
    }
  render() {
    return (
      <div className="App">
          <h2>{this.state.td011.id}</h2>
        <Backlog taskID = {this.state.td011.id}/>
        <Statistics/>
      </div>
    );
  }
}

export default App;















































