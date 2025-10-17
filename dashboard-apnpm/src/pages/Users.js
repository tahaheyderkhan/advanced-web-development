import React from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Sara", email: "sara@example.com" },
  { id: 3, name: "Ahmed", email: "ahmed@example.com" },
];

export default function Users() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Users List</h2>
      <ul style={{ listStyle: "none" }}>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => navigate(`/users/${user.id}`)}
            style={{
              cursor: "pointer",
              margin: "10px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}