const express = require("express");
const Journal = require("../models/Journal");

const router = express.Router();

router.post("/", async (req, res) => {
  const entry = new Journal(req.body);
  await entry.save();
  res.json(entry);
});

router.get("/:userId", async (req, res) => {
  const entries = await Journal.find({ userId: req.params.userId });
  res.json(entries);
});

module.exports = router;
