import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 800, description: "Powerful laptop" },
  { id: 2, name: "Mouse", price: 25, description: "Wireless mouse" },
  { id: 3, name: "Keyboard", price: 50, description: "Mechanical keyboard" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
