const express = require("express");
const app = express();
const username = process.env.POSTGRES_USERNAME;


app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/health", (req, res, next) => {
  const s = "Hello " + username;
  res.status(200).send(s);
});

