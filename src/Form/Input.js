import React from "react";

function Input(props) {
  const { id, label, type, value, onChange, ...rest } = props;

  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        {...rest}
        id={id}
        name={id}
        type={type || "text"}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
