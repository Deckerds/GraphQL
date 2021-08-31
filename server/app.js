const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

mongoose.connect(
  'mongodb+srv://Deckerds:Sandaru123@graphql.rmkmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Database Connected')
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3250, () => {
  console.log('App listening on port 3250!');
});
