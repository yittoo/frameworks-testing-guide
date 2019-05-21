const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");

const models = require("../models");
const schema = require("../graphql/schema");

// app.use(bodyParser.urlencoded({ extended: true }));
const mongoConfig = require("./mongo");

mongoose.Promise = global.Promise;
// if (!PROCESS_ENV_TEST) {
  console.log("Connecting `Dev` Database");
  mongoose.connect(mongoConfig.dev, { useNewUrlParser: true });
  mongoose.connection
    .once("open", () => console.log("Connected to Mongo."))
    .on("error", error =>
      console.log("Error connecting to Mongo, Error:", error)
    );
// } else {
//   console.log("Connecting `Test` Database");
//   mongoose.connect(mongoConfig.test, { useNewUrlParser: true });
//   mongoose.connection
//     .once("open", () => console.log("Connected to Mongo."))
//     .on("error", error =>
//       console.log("Error connecting to Mongo, Error:", error)
//     );
// }

app.use(bodyParser.json());
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
