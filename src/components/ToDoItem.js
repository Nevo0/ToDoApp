import React, { Component } from "react";

class ToDoItem extends Component {
  static defaultProps = {
    done: false
  };

  state = {
    done: this.props.task.done
  };

  toggleDone = () => {
    this.setState({
      done: !this.state.done
    });
  };
  render() {
    const { text } = this.props.task;

    return (
      <div onClick={this.toggleDone} className={this.state.done ? "done" : ""}>
        <p>{text}</p>
      </div>
    );
  }
}
export default ToDoItem;
