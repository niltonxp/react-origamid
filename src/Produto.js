import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Produto() {
  const params = useParams();
  console.log("params ->", params);

  const location = useLocation();
  console.log("location ->", location);

  const search = new URLSearchParams(location.search);
  console.log("search ->", search);
  console.log("search ->", search.get("name"));

  return (
    <div>
      <h1>Produto {params.id}</h1>
    </div>
  );
}

export default Produto;
