const express = require("express");
const app = express();
const PORT = process.env.PORT || 6066;

app.get("/", (req, res) => {
  res.send("Hello from Wasan World");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
