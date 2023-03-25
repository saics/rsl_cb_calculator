const express = require("express");
const cors = require("cors");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Clan Boss Calculator!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
