const graphql = require("graphql");
const { GraphQLString, GraphQLID, GraphQLInt, GraphQLNonNull } = graphql;
const mongoose = require("mongoose");

const Movie = mongoose.model("Movie");
const MovieType = require("../queries/movie");

/**
 * Graphql mutation `addMovie` that `POST` values into a new `Movie`
 * @param {GraphQL Params} - Title can't be null.
 * @returns {Object} - Updated Object
 */
module.exports = {
  type: MovieType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    year: { type: GraphQLInt },
    genre: { type: GraphQLString },
    director: { type: GraphQLString },
    bookId: { type: GraphQLID }
  },
  resolve(parentValue, args) {
    return new Movie({ ...args }).save();
  }
}