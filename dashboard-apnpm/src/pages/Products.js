import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 50 },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Products List</h2>
      <ul style={{ listStyle: "none" }}>
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
            style={{
              cursor: "pointer",
              margin: "10px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
