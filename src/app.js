'use strict';

const PORT    = process.env.PORT || 3000;

const express = require('express'),
      app     = express();

const schema    = require('./schema'),
      resolvers = require('./resolvers');

// const graphqlHTTP = require('express-graphql');
// const schema = require('./schema');
// const resolvers = require('./resolvers');

app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

const graphqlHTTP = require('express-graphql');

app.use('/graphql', graphqlHTTP(async (request, response, graphQLParams) => ({
  schema,
  rootValue: resolvers,
  graphiql: true
})));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
