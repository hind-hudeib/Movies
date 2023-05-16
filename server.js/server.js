const cors = require("cors");

const express = require("express");
const axios = require("axios");

const app = express();
const port = 8000;
app.use(cors());

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
