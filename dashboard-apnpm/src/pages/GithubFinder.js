import React, { useState } from "react";
import axios from "axios";

export default function GithubFinder() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(res.data);
    } catch (error) {
      setUserData(null);
      alert("User not found!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>GitHub User Finder</h2>
      <input
        type="text"
        value={username}
        placeholder="Enter GitHub username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUser}>Search</button>

      {userData && (
        <div style={{ marginTop: "20px" }}>
          <img src={userData.avatar_url} alt="avatar" width="100" />
          <h3>{userData.login}</h3>
          <p>Followers: {userData.followers}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
