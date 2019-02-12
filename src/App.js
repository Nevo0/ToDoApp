import React, { Component } from "react";

import ToDoList from "./components/ToDoList";
import "./App.css";

class App extends Component {
  myTasks = [
    { done: false, text: "zagrac w wiedzmina" },
    { done: false, text: "Spacer" },
    { done: false, text: "trening" },
    { done: true, text: "zagrac w wiedzmina3" },
    { done: false, text: "lorem" },
    { done: false, text: "ipsum" }
  ];

  render() {
    return (
      <div className="App">
        <ToDoList
          title="My staff"
          tasks={this.myTasks}
          done={this.myTasks.done}
        />
      </div>
    );
  }
}

export default App;
