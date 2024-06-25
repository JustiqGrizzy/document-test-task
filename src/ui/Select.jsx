import React from "react";

const Select = ({ label, state, setState, disabled = false }) => {
  return (
    <div className="mb-3">
      <label for="floatingSelect">{label}</label>
      <select
        class="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
        value={state}
        onChange={(e) => setState(e.target.value)}
        disabled={disabled}
      >
        <option selected>Input</option>
        <option value="1">Select</option>
        <option value="2">NumberInput</option>
      </select>
    </div>
  );
};

export default Select;
