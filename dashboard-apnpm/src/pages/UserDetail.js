
import React from "react";
import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Ali", email: "ali@example.com", role: "Admin" },
  { id: 2, name: "Sara", email: "sara@example.com", role: "User" },
  { id: 3, name: "Ahmed", email: "ahmed@example.com", role: "Editor" },
];

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <h2>User not found</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
