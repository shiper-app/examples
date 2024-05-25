const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Got a Request");
  res.send(process.env);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} v1.0.22`);
});
