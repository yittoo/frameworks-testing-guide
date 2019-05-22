const graphql = require("graphql");
const { GraphQLString, GraphQLID, GraphQLInt, GraphQLNonNull } = graphql;
const mongoose = require("mongoose");

const Movie = mongoose.model("Movie");
const MovieType = require("../queries/movie");

/**
 * Graphql mutation `editMovie` that `PATCH` values onto found movie
 * @param {GraphQL params} - ID can't be null
 * @returns {Object} - Updated Object
 */
module.exports = {
  type: MovieType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    genre: { type: GraphQLString },
    director: { type: GraphQLString },
    bookId: { type: GraphQLID }
  },
  resolve(parentValue, args) {
    const nonNullObjKeys = Object.keys(args).filter(key => args[key] !== null);
    let objToCast = {};
    nonNullObjKeys.forEach(key => {
      objToCast[key] = args[key];
    });
    return Movie.findById(args.id)
      .then(movie => {
        return movie.updateOne({ $set: { ...objToCast } }).then(() => {
          return { ...movie._doc, ...objToCast };
        });
      })
      .catch(err => err);
  }
};
