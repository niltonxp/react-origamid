import React, { useState } from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [cor, setCor] = useState("");
  const [languages, setLanguages] = useState([]);

  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox
        options={["JS", "PHP"]}
        value={languages}
        setValue={setLanguages}
      />

      <h2>Radio</h2>
      <Radio options={["Azul", "Red"]} value={cor} setValue={setCor} />

      <h2>Select</h2>
      <Select
        options={["teste", "teste1"]}
        value={product}
        setValue={setProduct}
      />

      <h2>Input</h2>
      <Input id="name" label="Nome" value={name} setValue={setName} />
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        setValue={setEmail}
      />
    </form>
  );
};

export default App;
