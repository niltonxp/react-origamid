import React, { useState } from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");

  return (
    <form>
      <Select
        options={["teste", "teste1"]}
        value={product}
        setValue={setProduct}
      />
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
