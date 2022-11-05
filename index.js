const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
// const MoviesAPI = require('./datasources/movies-api')


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  // dataSources: () => {
  //   return {
  //     moviesAPI: new MoviesAPI(),
  //     // personalizationAPI: new PersonalizationAPI(),
  //   };
  // },
});

server.listen(26000);
