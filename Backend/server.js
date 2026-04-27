const express = require("express");
//const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const journalRoutes = require("./routes/journal");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//mongoose.connect("mongodb://127.0.0.1:27017/calmora");

app.use("/api/auth", authRoutes);
app.use("/api/journal", journalRoutes);
app.get("/", (req, res) => {
  res.send("Calmora backend working");
});

app.listen(5000, () => console.log("Server running on port 5000"));
