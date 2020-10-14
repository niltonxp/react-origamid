import React from "react";

function Checkbox(props) {
  const { options = [], value, setValue, ...rest } = props;

  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      {options.map((option, index) => (
        <label key={`${option}-${index}`}>
          <input
            {...rest}
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
}

export default Checkbox;
