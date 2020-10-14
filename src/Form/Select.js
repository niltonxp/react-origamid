import React from "react";

function Select(props) {
  const { options = [], value, setValue, ...rest } = props;

  return (
    <select
      {...rest}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option, index) => (
        <option key={`${option}-${index}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
