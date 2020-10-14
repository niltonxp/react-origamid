import React from "react";

function Radio(props) {
  const { options = [], value, setValue, ...rest } = props;

  return (
    <>
      {options.map((option, index) => (
        <label key={`${option}-${index}`}>
          <input
            {...rest}
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
          />
          {option}
        </label>
      ))}
    </>
  );
}

export default Radio;
