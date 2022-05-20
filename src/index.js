/* index.js */
const { createServer } = require('graphql-yoga');

// Provide your schema
const server = createServer({
  schema: {
    typeDefs: `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello World',
      },
    },
  },
})

// Start the server and explore http://localhost:4000/graphql
server.start()
