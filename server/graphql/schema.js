const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const query = require("./queries");
const mutation = require("./mutations");

/**
 * Combines `query` and `mutation` into a `GraphQLSchema`
 * @returns {GraphQLSchema}
 */
module.exports = new GraphQLSchema({
  query,
  mutation
});