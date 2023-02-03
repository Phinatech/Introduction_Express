const express = require("express");
const PORT = 2022;
const app = express();


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server Up",
  });
});

app.listen(PORT, () => {
  console.log("Hello Judith");
});
