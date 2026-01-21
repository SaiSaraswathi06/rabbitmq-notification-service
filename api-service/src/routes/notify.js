const express = require("express");
const publishMessage = require("../rabbitmq/publisher");

const router = express.Router();

router.post("/", async (req, res) => {
  const { type, to, message } = req.body;

  if (!type || !to || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  await publishMessage({ type, to, message });

  res.json({ status: "Notification queued successfully" });
});

module.exports = router;
