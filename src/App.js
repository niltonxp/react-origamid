import React from "react";
import useFetch from "./useFetch";
import useLocalStore from "./useLocalStorage";

const App = () => {
  const [product, setProduct] = useLocalStore("product", "");
  const { request, data, loading } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      await request("https://ranekapi.origamid.dev/json/api/produto/");
    }

    fetchData();
  }, [request]);

  const handleClick = ({ target }) => setProduct(target.innerText);

  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <>
        <p>Produto preferido: {product}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((p) => (
          <h1 key={p.id}>{p.nome}</h1>
        ))}
      </>
    );
  else return null;
};

export default App;
