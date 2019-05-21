const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const mongoose = require("mongoose");

const Book = mongoose.model("Book");

const MovieType = new GraphQLObjectType({
  name: "MovieType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    genre: { type: GraphQLString },
    director: { type: GraphQLString },
    bookId: { type: GraphQLID },
    book: {
      type: require("./book"),
      resolve({ bookId }) {
        return Book.findById(bookId);
      }
    }
  })
});

module.exports = MovieType;
