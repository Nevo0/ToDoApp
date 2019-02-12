import React, { Component } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import NewTOdoForm from "./NewTOdoForm";

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
    // console.log(draft);

    const { draft, tasks } = this.state;

    const task = { done: false, text: draft };
    this.setState({
      tasks: [...tasks, task],
      draft: ""
    });
  };

  render() {
    // console.log(this.state.draft);

    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.tasks.map((task, index) => (
          <ToDoItem key={index} task={task} />
        ))}
        <NewTOdoForm
          onSubmit={this.addTask}
          onChange={this.updateDraft}
          draft={this.state.draft}
        />

        <div />
      </div>
    );
  }
}

export default ToDoList;
