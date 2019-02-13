import React from "react";
import styled from "styled-components";

// sc	styled component empty skeleton
// esc
const Button = styled.button`
  /* padding: 10px; */
  background: #232632;

  border-radius: 10px;
  color: #00a7fa;
  width: 80px;
  height: 32px;
  font-size: 1.7em;
  border: 0px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const TextInput = styled.input`
  padding: 5px;
  font-size: 0.7em;
  background: #232632;
  color: #d3d4d6;
  width: 100%;
  margin-right: 7px;
  border: 0px;
`;
const Container = styled.div`
  display: flex;
  background: #232632;
  justify-content: space-between;
  border: 2px solid #343744;
  border-radius: 10px;
  padding: 5px;
`;

const NewTOdoForm = ({ onSubmit, onChange, draft }) => {
  return (
    <Container>
      <TextInput type="text" value={draft} onChange={onChange} />
      <Button onClick={onSubmit}>Add</Button>
    </Container>
  );
};

export default NewTOdoForm;
