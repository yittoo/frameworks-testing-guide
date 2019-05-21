const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const mongoose = require("mongoose");

const Movie = mongoose.model("Movie");

const BookType = new GraphQLObjectType({
  name: "BookType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    genre: { type: GraphQLString },
    author: { type: GraphQLString },
    movieId: { type: GraphQLID },
    movie: {
      type: require("./movie"),
      resolve({ movieId }) {
        return Movie.findById(movieId);
      }
    }
  })
});

module.exports = BookType;
