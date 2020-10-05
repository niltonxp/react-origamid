import React from "react";
import useLocalStore from "./useLocalStorage";

const App = () => {
  const [product, setProduct] = useLocalStore("product", "");

  const handleClick = ({ target }) => setProduct(target.innerText);

  return (
    <>
      <p>Produto preferido: {product}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </>
  );
};

export default App;
