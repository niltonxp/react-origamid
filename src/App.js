import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";

const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const name = useForm();
  const lastName = useForm(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (cep.validate() && email.validate() && name.validate()) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id="name" label="Nome" {...name} />
      <Input id="lastName" label="Sobrenome" {...lastName} />
      <Input id="cep" label="Cep" placeholder="00000-000" {...cep} />
      <Input id="email" label="Email" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
