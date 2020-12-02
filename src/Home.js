import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"produto/notebook"}>Notebook</Link> {" "}
      <Link to={"produto/smartphone?name=poco"}>Smartphone</Link>
    </div>
  );
}

export default Home;
