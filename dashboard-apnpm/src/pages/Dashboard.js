import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/products")}>Products</button>
      <button onClick={() => navigate("/users")}>Users</button>
      <button onClick={() => navigate("/github")}>GitHub Finder</button>
    </div>
  );
}
