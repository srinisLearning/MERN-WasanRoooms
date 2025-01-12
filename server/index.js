const express = require("express");
const app = express();
const PORT = process.env.PORT || 6066;
app.use(express.json());
const dbConfig = require("./db");
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Wasan World");
});
const roomsRoutes = require("./routes/roomRoutes");
app.use("/api/rooms", roomsRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
