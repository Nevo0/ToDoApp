import React from "react";

const NewTOdoForm = ({ onSubmit, onChange, draft }) => {
  return (
    <div>
      <input type="text" value={draft} onChange={onChange} />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

export default NewTOdoForm;
