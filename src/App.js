import React from "react";
import Product from './Product'

const App = () => {
  const [product, setProduct] = React.useState(null)

  React.useEffect(() => {
    const localProduct = window.localStorage.getItem('@appreact/product')
    if(localProduct !== null) setProduct(localProduct)
  }, [])

  React.useEffect(() => {
    if(product !== null) window.localStorage.setItem('@appreact/product', product)
  }, [product])

  function handleClick({target}) {
    setProduct(target.innerText)
  }

  return (
    <div>
      <h1>Preferência: {product}</h1>
      <button onClick={handleClick} style={{marginRight: '1rem'}}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Product product={product} />
    </div>
  )
};

export default App;
