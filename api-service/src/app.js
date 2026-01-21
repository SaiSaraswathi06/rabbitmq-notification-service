const express = require("express");
const notifyRoute = require("./routes/notify");

const app = express();
app.use(express.json());

app.use("/notify", notifyRoute);

app.get("/", (req, res) => {
  res.send("API Service is running");
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
