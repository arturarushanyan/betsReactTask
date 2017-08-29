import React, { Component } from 'react';
import Backlog from "./Components/Backlog";
import Statistics from "./Components/Statistics";
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
  render() {
    return (
      <div className="App">
        <Backlog/>
        <Statistics/>
      </div>
    );
  }
}

export default App;















































