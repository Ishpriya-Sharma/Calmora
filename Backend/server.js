const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const journalRoutes = require("./routes/journal");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/journal", journalRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Calmora backend working");
});

app.listen(5000, () => console.log("Server running on port 5000"));
