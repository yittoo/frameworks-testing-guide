const graphql = require("graphql");
const { GraphQLString, GraphQLID, GraphQLInt } = graphql;
const mongoose = require("mongoose");

const Book = mongoose.model("Book");
const BookType = require("../queries/book");

module.exports = {
  type: BookType,
  args: {
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    genre: { type: GraphQLString },
    author: { type: GraphQLString },
    movieAdaptationId: { type: GraphQLID }
  },
  resolve(parentValue, args) {
    return new Book({ ...args }).save();
  }
};
