const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const BookType = require("./book");
const MovieType = require("./movie");
const Book = mongoose.model("Book");
const Movie = mongoose.model("Movie");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movie.find({});
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return Book.find({});
      }
    },
    movie: {
      type: MovieType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Movie.findById(id);
      }
    },
    book: {
      type: BookType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Book.findById(id);
      }
    }
  }
});

module.exports = RootQuery;
