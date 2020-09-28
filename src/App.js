import React from "react";

const App = () => {
  const [cart, setCart] = React.useState(0);
  const [notification, setNotification] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCart(cart + 1);
    setNotification("Success to add Item");

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 3000);
  }

  return (
    <div>
      <h1>{notification}</h1>
      <button onClick={handleClick}>Add to cart {cart}</button>
    </div>
  );
};

export default App;
