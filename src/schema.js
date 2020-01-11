const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Stock {
    ticker: String!
  }
  type Query {
    dummy: String!
  }
  type Mutation {
    addStock(ticker: String!): Stock
  }
`);
