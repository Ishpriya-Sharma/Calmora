const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// ✅ Load routes correctly
const authRoutes = require(path.join(__dirname, "routes", "auth"));
const journalRoutes = require(path.join(__dirname, "routes", "journal"));

app.use(cors());
app.use(express.json());

// Optional static (you can keep or remove)
app.use(express.static("public"));

// ✅ Debug (to see requests)
app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.url);
  next();
});

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/journal", journalRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Calmora backend working");
});

// 404 handler (helps debugging)
app.use((req, res) => {
  console.log("NOT FOUND:", req.method, req.url);
  res.status(404).send("Route not found");
});

app.listen(5000, () => console.log("Server running on port 5000"));
