const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  userId: String,
  content: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Journal", JournalSchema);
