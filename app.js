const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schemas/index');
const graphQlresolvers = require('./graphql/resolvers/index');

const app = express();
const port = 5500;

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlresolvers,
    graphiql: true
}));

// mongoose.connect('mongodb://localhost:4444/montrello', { useNewUrlParser: true, useUnifiedTopology: true }) //for development
mongoose.connect('mongodb://montrellodb:4444/montrello', { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
    var server = app.listen(port, () => {
        console.log(`[Montrello] running on port ${port}`);
    });
})
.catch( error => {
    throw new Error('Cannot connect to DB');
})


app.get('/', (req, res) => {
    res.send(`[Montrello] running on port ${port}`);
});