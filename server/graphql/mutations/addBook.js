const graphql = require("graphql");
const { GraphQLString, GraphQLID, GraphQLInt, GraphQLNonNull } = graphql;
const mongoose = require("mongoose");

const Book = mongoose.model("Book");
const BookType = require("../queries/book");

/**
 * Graphql mutation `addBook` that `POST` values into a new `Book`
 * @param {GraphQL Params} - Title can't be null.
 * @returns {Object} - Updated Object
 */
module.exports = {
  type: BookType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    year: { type: GraphQLInt },
    genre: { type: GraphQLString },
    author: { type: GraphQLString },
    movieId: { type: GraphQLID }
  },
  resolve(parentValue, args) {
    return new Book({ ...args }).save();
  }
};
