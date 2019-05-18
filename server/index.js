const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const jest = require('jest')

const app = express();

app.set("view engine", "html");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client/build"));

app.get("api/test", (req, res) => {
  res.send({data: "something from server"});
});

app.listen(5000, () => {
  console.log("API listening on port 5000");
});
