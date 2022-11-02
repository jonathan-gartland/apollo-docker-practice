const { ApolloServer, gql } = require('apollo-server');

const data = { 
  "temps": [
    {
      "id": 1,
},
{
  "id": 2,
}
  ]
};

const typeDefs = gql`
  type temp {
  id: ID
}

type Query {
  temps: [temp]
}
`;

const resolvers = {
  Query: {
  temps: () => data.temps
}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(24000);
