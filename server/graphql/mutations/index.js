const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const addBook = require("./addBook");
const addMovie = require("./addMovie");
const editBook = require("./editBook");
const editMovie = require("./editMovie");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBook,
    addMovie,
    editBook,
    editMovie
  }
});

module.exports = mutation;
