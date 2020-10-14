import React, { useState } from "react";
import Input from "./Form/Input";

const App = () => {
  const [cep, setCep] = useState("");
  const [error, setError] = useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor!");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um Cep válido!");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateCep(cep)) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="cep"
        label="Cep"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
