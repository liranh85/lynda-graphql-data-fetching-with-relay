import express from 'express'
import graphqlHTTP from 'express-graphql'
// import schema from './schema'
import path from 'path'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import { schema } from './data/database' // Needs to be created

const APP_PORT = 3000
const GRAPHQL_PORT = 8081

const graphQLServer = express()

graphQLServer.use('/', graphqlHTTP({
  schema,
  pretty: true,
  graphiql: true
}))

graphQLServer.listen(GRAPHQL_PORT, () => console.log(`Running GraphQL server on localhost:${GRAPHQL_PORT}`))

// Relay
const compiler = webpack({
  entry: ['whatwg-fetch', path.resolve(__dirname, 'src', 'App.js')],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
  output: { filename: 'App.js', path: '/' }
})

const app = new WebpackDevServer(compiler, {
  contentBase: '/public',
  proxy: { '/graphql': `http://localhost:${APP_PORT}` },
  publicPath: '/src/',
  stats: { colors: true },
})

app.use('/', express.static(path.resolve(__dirname, 'public')))
app.listen(APP_PORT, () => console.log(`Running GraphQL server on localhost:${APP_PORT}`))
