const graphql = require("graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;

const RootQueryType = require("./queries");
const mutations = require("./mutations");

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations
});

// query: RootQueryType,
// mutation: mutations
