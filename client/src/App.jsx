import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => {
        // Sets users from res.data.data or just res.data
        setUsers(res.data.data || res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ backgroundColor: "#e75555", color: "white", minHeight: "100vh", padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ borderBottom: "2px solid #fc2a2a", paddingBottom: "10px" }}>Users</h1>

      {loading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={{ background: "#222", margin: "10px 0", padding: "15px", borderRadius: "5px" }}>
            <h3 style={{ color: "#4db8ff", margin: "0" }}>{user.name}</h3>
            <p style={{ color: "#aaa", margin: "5px 0 0" }}>{user.email}</p>
          </div>
        ))
      ) : (
        <p>No users found. Check your backend!</p>
      )}
    </div>
  );
}

export default App;