const express = require("express");
const cors = require("cors");
const upscaleRoute = require("./routes/upscale");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/results", express.static("results"));
app.use("/api/upscale", upscaleRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
