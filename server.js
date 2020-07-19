const express = require("express");
const { microlibs } = require("./test-data/microlib-data");

const port = process.env.PORT || 8000;
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("Working!");
});

app.get("/locations", (req, res) => {
  const coordinates = microlibs.map((microlib) => {
    const { latitude, longitude } = microlib;
    return { latitude, longitude };
  });
  res.status(200).json(coordinates);
});

app.listen(port, () => {
  console.log(`App working on port ${port}`);
});
