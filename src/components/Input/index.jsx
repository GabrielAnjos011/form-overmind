import React from "react";
import "./styles.css";

function Input({ type, label, name, value, onChange, title, placeholder, pattern }) {
  return (
    <div className="containerInput">
      <label>{label}:</label>
      <input
        className="inputStyle"
        title={title}
        type={type}
        name={name}
        value={value}
        required
        placeholder={placeholder}
        pattern={pattern}
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
