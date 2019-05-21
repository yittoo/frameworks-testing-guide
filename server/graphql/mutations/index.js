const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const mongoose = require("mongoose");

const addBook = require("./addBook");
const addMovie = require("./addMovie");

const Book = mongoose.model("Book");
const BookType = require("../queries/book");
const Movie = mongoose.model("Movie");
const MovieType = require("../queries/movie");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBook,
    addMovie
  }
});

module.exports = mutation;
