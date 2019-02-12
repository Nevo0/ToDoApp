import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ""
  };

  updateDraft = e => {
    this.setState({
      draft: e.target.value
    });
  };

  addTask = () => {
    const { draft, tasks } = this.state;
    const task = draft;
    this.setState({
      tasks: [...tasks, task],
      draft: ""
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.tasks.map((task, index) => (
          <ToDoItem key={index} task={task} />
        ))}
        <input
          type="text"
          value={this.state.draft}
          onChange={this.updateDraft}
        />
        <button onClick={this.addTask}>Add</button>
        <div />
      </div>
    );
  }
}

export default ToDoList;
