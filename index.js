const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ProfileAPI = require('./datasources/profile-api')


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      profileAPI: new ProfileAPI(),
    };
  },
});

server.listen(26000);
