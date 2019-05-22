const graphql = require("graphql");
const { GraphQLString, GraphQLID, GraphQLInt, GraphQLNonNull } = graphql;
const mongoose = require("mongoose");

const Book = mongoose.model("Book");
const BookType = require("../queries/book");

/**
 * Graphql mutation `editBook` that `PATCH` values onto found book
 * @param {GraphQL params} - ID can't be null
 * @returns {Object} - Updated Object
 */
module.exports = {
  type: BookType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    genre: { type: GraphQLString },
    author: { type: GraphQLString },
    movieId: { type: GraphQLID }
  },
  resolve(parentValue, args) {
    const nonNullObjKeys = Object.keys(args).filter(key => args[key] !== null);
    let objToCast = {};
    nonNullObjKeys.forEach(key => {
      objToCast[key] = args[key];
    });
    return Book.findById(args.id)
      .then(book => {
        return book.updateOne({ $set: { ...objToCast } }).then(() => {
          return { ...book._doc, ...objToCast };
        });
      })
      .catch(err => err);
  }
};
