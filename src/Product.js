import React from "react";

function Product({ product }) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (product !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((res) => res.json())
        .then((json) => setData(json));
  }, [product]);

  if (data === null) return null;
  return (
    <>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
    </>
  );
}

export default Product;
