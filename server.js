const express = require("express");
const cors = require("cors");
const path = require("path");
const upscaleRouter = require("./routes/upscale");

const app = express();
const PORT = 3001; // Gunakan satu port saja

// Middleware
app.use(cors());
app.use(express.json());

// Static file routes
app.use("/uploads", express.static("uploads"));
app.use("/results", express.static(path.join(__dirname, "results")));

// API route
app.use("/api/upscale", upscaleRouter);

// Tes route
app.get("/", (req, res) => {
  res.send("Upscle backend is running!");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
