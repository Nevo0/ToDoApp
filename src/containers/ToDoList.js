import React, { Component } from "react";
import ToDoItem from "../components/ToDoItem/";
import NewTOdoForm from "../components/NewTOdoForm/";

import styled from "styled-components";
// styled-components
const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;
// styled-components
const Header = styled.h1`
  color: #fff;
`;

class ToDoList extends Component {
  static defaultProps = {
    tasks: [
      { done: false, text: "zagrac w wiedzmina" },
      { done: false, text: "Spacer" },
      { done: false, text: "trening" },
      { done: true, text: "zagrac w wiedzmina3" },
      { done: false, text: "lorem" },
      { done: false, text: "ipsum" }
    ],
    title: "To do APP1"
  };

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
      <Container>
        <Header>{this.props.title}</Header>

        {this.state.tasks.map((task, index) => (
          <ToDoItem key={index} task={task} />
        ))}

        <div />
        <NewTOdoForm
          onSubmit={this.addTask}
          onChange={this.updateDraft}
          draft={this.state.draft}
        />
      </Container>
    );
  }
}

export default ToDoList;
