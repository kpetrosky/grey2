const express = require('express');
const { graphql } = require('graphql');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

const root = resolvers;

app.use(bodyParser.json());
app.use(
  '/graphql',
  express.json(),
  authMiddleware,
  (req, res) => {
    graphql({
      schema: typeDefs,
      rootValue: root,
      contextValue: { user: req.user },
      variableValues: req.body.variables,
      operationName: req.body.operationName,
      source: req.body.query,
    }).then((result) => {
      res.json(result);
    });
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
});

