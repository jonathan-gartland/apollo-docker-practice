const { ApolloServer, gql } = require('apollo-server');

const data = { 
  temps: [
    {
      id: 1,
    },
    {
      id: 2,
    }
  ]
};

const profileData = {
  profiles: [ 
    {
      id: 1,
      name: 'profile1',
    },
    {
      id: 2,
      name: 'profile2',
    }
  ]
};

const typesData = {
  types: [
    {
      id: 1,
      name: "type1",
      typ: "a",
    }
  ]

}

const typeDefs = gql`
  type type {
    id: ID,
    name: String,
    typ: String,
  }

  type profile {
    id: ID,
    name: String,
  }

  type temp {
    id: ID
  }

  type Query {
    temps: [temp],
    profiles: [profile],
    types:[type],
  }
`;

const resolvers = {
  Query: {
  temps: () => data.temps,
  profiles: () => profileData.profiles,
  types: () => typesData.types
  }

};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(26000);
