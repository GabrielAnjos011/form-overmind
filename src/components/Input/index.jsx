import React from "react";
import "./styles.css";

function Input({ type, label, name, value, onChange, title }) {
  return (
    <div className="containerInput">
      <label>{label}:</label>
      <input
        required
        className="inputStyle"
        title={title}
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
