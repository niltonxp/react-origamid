import React, { useState } from "react";
import Input from "./Form/Input";

const App = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <form>
      <Input id="name" label="Nome" value={name} setValue={setName} />
      <Input id="email" label="Email" type="email" value={email} setValue={setEmail} />
    </form>
  );
};

export default App;
