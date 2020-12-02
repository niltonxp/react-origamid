import React from "react";
import { Link } from "react-router-dom";
import Head from "../Head/Head";
import styles from "./Produts.module.css";

const Products = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProducts(json));
  }, []);

  if (products === null) return null;
  return (
    <section className={`${styles.products} animeLeft`}>
      <Head title="Ranek" description="Descição do site" />
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <h1 className={styles.name}>{product.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Products;
