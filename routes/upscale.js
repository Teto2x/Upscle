router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded");

  const inputPath = req.file.path;
  const outputPath = path.join("results", req.file.filename);

  // Buat folder jika belum ada
  if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
  if (!fs.existsSync("results")) fs.mkdirSync("results");

  const waifuCommand = `./waifu2x-ncnn-vulkan-20250504-windows/waifu2x-ncnn-vulkan.exe -i "${inputPath}" -o "${outputPath}" -n 2 -s 2`;

  exec(waifuCommand, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Upscaling failed");
    }

    res.json({
      success: true,
      url: `/results/${path.basename(outputPath)}`,
      file: req.file.filename
    });
  });
});