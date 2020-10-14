import React from "react";

function Input(props) {
  const { id, label, type, value, onChange, onBlur, placeholder, error} = props;

  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        name={id}
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
}

export default Input;
