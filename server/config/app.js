const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");

const models = require("../models");
const schema = require("../graphql/schema");

// app.use(bodyParser.urlencoded({ extended: true }));
const mongoConfig = require("./mongo");

/**
 * Configs mongo to return promises
 */
mongoose.Promise = global.Promise;

/**
 * Connects `app` to Mongo Database
 * @param {String} - Mongo URL from /server/config/mongo.js
 * @param {Object} - Options for `mongoose.connect`
 */
console.log("Connecting `Dev` Database");
mongoose.connect(mongoConfig.dev, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected to Mongo."))
  .on("error", error =>
    console.log("Error connecting to Mongo, Error:", error)
  );


app.use(bodyParser.json());

/**
 * Creates testing enviorenment at `/graphql` using `express-graphql` package
 * @param {String} - url for testing enviorenment
 * @param {expressGraphQL}
 * @returns {Function} - Middleware function for `app`
 */
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// app.get("api/test", (req, res) => {
//   res.send({data: "something from server"});
// });

module.exports = app;
