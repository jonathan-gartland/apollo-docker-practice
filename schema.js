const { gql } = require('apollo-server');
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

module.exports = typeDefs;