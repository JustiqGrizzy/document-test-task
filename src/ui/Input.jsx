import React from "react";

const Input = ({ label, type = "text", placeholder, state, setState }) => {
  return (
    <div className="mb-3">
      <label htmlFor="floatingInput">{label}</label>
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
