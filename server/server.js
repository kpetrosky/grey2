const express = require('express');
const { graphql } = require('graphql');
const path = require('path');
const authMiddleware = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const root = resolvers;

app.use(
  '/graphql',
  express.json(),
  authMiddleware, // Apply the authMiddleware to the GraphQL endpoint
  (req, res) => {
    graphql({
      schema: schema,
      rootValue: root,
      contextValue: { user: req.user }, // Pass the authenticated user to the context
      variableValues: req.body.variables,
      operationName: req.body.operationName,
      source: req.body.query,
    }).then((result) => {
      res.json(result);
    });
  }
);

app.use(express.urlencoded({ extended: false }));

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
});
