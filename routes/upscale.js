const express = require("express");
const multer = require("multer");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Setup multer
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  const inputPath = req.file.path;
  const outputPath = "results/" + req.file.filename;

  const waifuCommand = `./waifu2x-ncnn-vulkan-20250504-windows/waifu2x-ncnn-vulkan.exe -i ${inputPath} -o ${outputPath} -n 2 -s 2`;

  exec(waifuCommand, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Upscaling failed");
    }

    res.json({ url: `/results/${path.basename(outputPath)}` });
  });
});

module.exports = router;
