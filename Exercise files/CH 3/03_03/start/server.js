import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import path from 'path';
import webpack from 'webpack';
import WebPackDevServer from 'webpack-dev-server';
import { schema } from './data/database'; // keep looking for this

const APP_PORT = 3000;
const GRAPHQL_PORT = 8080;

// GraphQL server
const graphQLServer = express();
graphQLServer.use('/', graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(`GraphQL server on localhost:${GRAPHQL_PORT}`));

