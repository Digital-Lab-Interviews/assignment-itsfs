const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const petController = require("./controllers/petController");

const app = express();
const PORT = 9000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/pet", petController);

// Health check endpoint for /health.html
app.get("/health.html", (req, res) => {
  res.status(200).send("OK. Healthy!");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Petstore Express API running on http://localhost:${PORT}`);
  });
}

module.exports = app;
