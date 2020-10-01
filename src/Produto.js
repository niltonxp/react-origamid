import React from "react";
import { GlobalContext } from "./GlobalContext";

function Produto() {
  const { data, cleanData } = React.useContext(GlobalContext);

  return (
    <div>
      Produto:
      {data !== null && data.map((p) => (
        <li key={p.id}>{p.nome}</li>
      ))}
      <button onClick={() => cleanData()}>Limpar</button>
    </div>
  );
}

export default Produto;
