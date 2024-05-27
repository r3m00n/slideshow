const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const imagesDir = path.join(__dirname, 'images');

app.use(express.static(__dirname));

app.get('/images', (req, res) => {
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      res.status(500).send('Unable to scan directory: ' + err);
      return;
    }
    const images = files.filter(file => /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(file));
    res.json(images);
  });
});

app.listen(port, () => {
  console.log(`Slideshow running at http://localhost:${port}`);
});
