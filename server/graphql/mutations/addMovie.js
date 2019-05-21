const graphql = require("graphql");
const { GraphQLString, GraphQLID, GraphQLInt } = graphql;
const mongoose = require("mongoose");

const Movie = mongoose.model("Movie");
const MovieType = require("../queries/movie");

module.exports = {
  type: MovieType,
  args: {
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    genre: { type: GraphQLString },
    director: { type: GraphQLString },
    bookOriginId: { type: GraphQLID }
  },
  resolve(parentValue, {title}) {
    return new Movie({ ...args }).save();
  }
}