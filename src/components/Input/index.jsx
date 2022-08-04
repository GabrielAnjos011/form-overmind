import React from "react";
import "./styles.css";

function Input({ type, label, name, value, onChange }) {
  return (
    <div className="containerInput">
      <label>{label}:</label>
      <input
        required
        className="inputStyle"
        type={type}
        name={name}
        value={value}
        onChange={(ev) => {
          onChange((previousStates) => ({
            ...previousStates,
            [name]: ev.target.value,
          }));
        }}
      />
    </div>
  );
}

export default Input;
