const express = require("express");
const cors = require("cors");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// Safety: Re-initialize the file
db.defaults({ users: [] }).write();

const app = express();
app.use(cors());
app.use(express.json()); // This MUST be here for Insomnia to work

// 1. GET ROUTE
app.get("/api/users", (req, res) => {
  const users = db.get("users").value();
  res.json({ data: users });
});

// 2. POST ROUTE (The one causing trouble)
app.post("/api/users", (req, res) => {
  console.log("Insomnia is trying to add a user...");
  
  try {
    const newUser = { 
      id: Date.now(), 
      name: req.body.name || "Unknown", 
      email: req.body.email || "No Email" 
    };

    db.get("users").push(newUser).write();
    
    console.log("Successfully saved to db.json!");
    res.status(201).json({ message: "Saved!", data: newUser });
  } catch (err) {
    console.error("CRASH ERROR:", err);
    res.status(500).json({ error: "Server crashed while saving" });
  }
});

app.listen(5000, () => console.log("🚀 Server Online on Port 5000"));