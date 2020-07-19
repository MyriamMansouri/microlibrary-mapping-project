const express = require("express");
const { microlibs } = require("./test-data/microlib-data");

const PORT = 8000;
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("Working!");
});

app.get("/locations", (req, res) => {
  const coordinates = microlibs.map((microlib) => {
    const { latitude, longitude } = microlib;
    console.log(microlib)
    return { latitude, longitude };
  });
  console.log(coordinates)
  res.status(200).json(coordinates);
});

app.listen(PORT, () => {
  console.log(`App working on port ${PORT}`);
});
