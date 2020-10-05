import React from "react";

const App = () => {
  const [form, setForm] = React.useState({ name: "", email: "" });

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(form));
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input id="name" type="text" value={form.name} onChange={handleChange} />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <button>Enviar</button>
    </form>
  );
};

export default App;
